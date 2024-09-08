import { createProps, DIV, BUTTON, P } from "../../../src";

const styleProps = createProps({color:"red"});

export default function () {
    const props = createProps({ count: 1 });
    return (
        DIV(props, p => [
            { id: 'test-element'}, 
            P(styleProps, sp => [
                {
                    style: `color: ${sp.color};`, 
                    onclick: () => {
                        sp.color = 'blue';
                    }
                },
                `Color: ${sp.color}`,
                `Count: ${p.count}`
            ]),
            BUTTON({ onclick: () => p.count += 1 }, [
                "Increment"
            ])
        ])
    )
}



