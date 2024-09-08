import { createEffect, createProps, BUTTON, DIV, H1, H6, H2 } from "../../../src";

type AppProps = {
    theme: 'light' | 'dark',
    user: undefined | {username: string}
}

const props = createProps<AppProps>({
    theme: 'dark',
    user: undefined
}, [
    // make sure light theme is appropriate
    createEffect('theme', (p) => {
        const date = new Date();
        const isNight = date.getHours() < 6 || date.getHours() > 18;
        if (p.theme === 'light' && isNight){
            console.log('Nope');
            p.theme = 'dark';
        }
    }),
    // keep the user perpetually signed in
    createEffect(['user', /* more deps here if you want*/], (p) => {
        if (!p.user) {
            setTimeout(() => {
                p.user = { username: "snakgoat" }
            }, 3000)
        }
    })
]);

export default function HomePage () {
    return (
        DIV({ id: 'app' },
            DIV(props, p => [
                { id: 'home-page' },
                !p.user ? (
                    H2('Loading Information...')
                ) : (
                    H1(`Welcome ${p.user.username}`)
                ),
                BUTTON(
                    {onclick: () => p.theme = 'light'}, 
                    "Change Theme"
                ),
                BUTTON(
                    {onclick: () => p.user = undefined}, 
                    "Sign Out"
                )
            ]),
            H6('Come Again!')
        )
    )
}