import {BUTTON, DIV, H1} from "../../../src/intrinsics";
import {createProps} from "../../../src/props";

export default function(){
const props = createProps({count: 0});

const counter = DIV(props, p => [
    {id: 'simple-counter'},
    H1(`Count: ${p.count}`),
    BUTTON(
        {onclick: () => p.count += 1},
        'Increment Count'
    )
]);

document.body.append(counter);
}

