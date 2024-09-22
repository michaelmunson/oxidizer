import {createEffect, createProps, DIV, P, BUTTON, ox, H1, HR, html} from "oxidizer"


const Counter = () => {
    const props = createProps({count: 0}, [
        // keep count greater than or equal to 0
        createEffect(['count'], $ => {
            if ($.count < 0){
                $.count = 0;
            }
            else if ($.count > 10){
                $.count = 10;
            }
        })
    ]);

    return (
        DIV(props, $ => [
            {id: 'counter-app'},
            H1('Counter App'),
            P({id: 'count'}, 'Count: ' + $.count),
            DIV({style: {display: 'flex'}}, 
                BUTTON({id: 'decrement-button', onclick: () => $.count -= 1}, "Decrement"),
                BUTTON({id: 'increment-button', onclick: () => $.count += 1}, "Increment")
            )
        ])
    )
}

const UtilsApp = () => {
    const div = DIV({id: 'utils-app'});
    const render = ox(div);

    return render(
        H1({id: 'utils-app-header'}, 'Utils App'),
    )
}

const FragmentApp = () => {
    const props = createProps({
        header: "Fragment App"
    });

    (window as any).props = props;

    return (
        DIV(props, $ => [
            {id: 'fragment-app'}, 
            html`
                <h1 id="fragment-app-header">${$.header}</h1>
                <h2 id="fragment-app-subheader">Hello World!</h2>
            `,
            BUTTON({onclick: () => $.header = "Fragment App Updated"}, "Click to Update Header")
        ])
    )
}

const apps = [
    Counter, 
    UtilsApp, 
    FragmentApp
];

export default function App(){
    return (
        DIV({id: 'app'},
            "HELLO!",
            apps.map(app => [
                app(),
                HR()
            ])
        )
    )
}
