import { DIV, A, createProps, BUTTON, P, H1, createEffect } from "../../../src";

const GlobalProps = createProps({
    user: "",
    env: "dev"
}, [
    createEffect(["env"], props => {
        if (props.env === "prod"){
            return {env: "dev (i warned you)"}
        }
    })
]);

const fetchUser = () => {
    setTimeout(() => {
        GlobalProps.user = "Michael";
    }, 3000)
}

export default function() {
    fetchUser()
    return (
        DIV(GlobalProps, function (p) {
            const attrs = { id: "example-two-app" };
            if (!p.user) {
                this.style.opacity = '.5'
                return [
                    attrs,
                    H1(p.env + ": Loading")
                ]
            }
            this.style.opacity = '1'
            return [
                attrs,
                H1(`${p.env}: Welcome ${p.user}`)
            ]
        })
    )
}