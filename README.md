# Oxidizer v3
An incredibly lightweight and easy to use Web Development library that is reactive and based upon Web Components.

# Installation
```bash
npm install oxidizer
```

# Usage

## Creating HTML Elements
Every HTML Element has a correspond factory function that can be used to create them. 
<br/><br/>
These functions return an `HTMLElement` instance

```typescript
import {DIV, H1, H3} from "oxidizer"

const simpleHeader = DIV(
    {id: 'simple-header', className: 'col center'}, // Attributes
    H1('Heading 1'), // Children
    H3('Sub Heading')
);

document.body.append(simpleHeader);

console.log(simpleHeader instanceof HTMLDivElement) // true
```

Elements can be created without attributes, or without children, or without both.
```typescript
const div = DIV();
```
```typescript
const div = DIV({id: 'my-div'})
```
```typescript
const div = DIV(
    P('Paragraph 1'),
    P('Paragraph 2')
)
```

## Props & Reactivity
These element factory functions can also take props as an input, which can be used to dynamically update their attributes and contents.

### Creating Props
**props** can be created using the `createProps` method.
```typescript
// SIMPLE COUNTER APP EXAMPLE

import {createProps, BUTTON, DIV, H1} from "oxidizer";

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
```
* props can be altered by simply setting the value on it's property
* altering props triggers a rerender via the function provided in the element factory
* props will only rerender the elements in which they have been passed.

```typescript
// ANOTHER EXAMPLE

import {createProps, DIV, INPUT, P} from "oxidizer";

const props = createProps({
    firstName: "John",
    lastName: "Doe"
});

const nameInput = DIV(props, p => [
    {className: 'name-card'},
    DIV({style: {display: 'flex'}},
        P(p.firstName),
        P(p.lastName)
    ),
    DIV({style: 'display:flex'}, 
        INPUT({
            placeholder: 'First Name', 
            value: p.firstName,
            onchange(event){
                p.firstName = (event.target as HTMLInputElement).value;
            },
        }),
        INPUT({
            placeholder: 'Last Name', 
            value: p.lastName,
            onchange(event){
                p.lastName = (event.target as HTMLInputElement).value;
            },
        }),
    )
])

document.body.append(nameInput);
```
**props** can be easily mixed together
```typescript
import { createProps, DIV, BUTTON, P } from "oxidizer";

const styleProps = createProps({color:'red'});

function WeirdElement () {
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

document.body.append(
    WeirdElement()
)
```
### Creating Effects
**Effects** are functions that will we triggered when a specified **props** property has been altered.
* effect callbacks will be ran immediately upon creation
* the return value of the callback will be applied to the props
```typescript
import { createEffect, createProps, BUTTON, DIV, H1, H6, H2 } from "oxidizer";

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
            return {theme: 'dark'}
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
```

## Web Components
Web Components can be simply integrated into your app via the `createComponent` method.
* `createComponent` returns a factory function that works identically to the intrinsic HTMLElement factory functions.
* *(optional)* You can use the `Component` interface to help with WebComponent typing.
```typescript
import { createComponent, Component, H1, P } from "oxidizer";

const TestApp = createComponent(
    'test-app',
    class extends HTMLElement implements Component {
        connectedCallback(): void {
            this.style.color = "red";
            this.style.background = "blue";
        }
    }
);

document.body.append(
    TestApp(
        {id: "root"}, 
        H1('Hello!'),
        P('How do you like my app?')
    )
)

export default TestApp;
```