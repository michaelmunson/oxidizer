# Oxidizer

Oxidizer is a web development framework intended as a lightweight substitute for React.

## Features
- lightweight & simple
- Seamless integration of HTML, CSS, and JS
- Easily create custom HTML elements 

## Installation
    npm install oxidizer --save-dev

---

## Getting Started
### HTML Elements

Each HTML element has a corresponding Oxidizer class. 

``` javascript
import { DIV } from "oxidizer"

const divEl = new DIV();
```

This would be akin to doing:

``` javascript
const divEl = document.createElement('div');
```
<br/>

These Oxidizer classes take 0, 1 or two 2 arguments:
1. A props ***Object*** whose properties correspond to an HTML elements property's or attribute's.
2. An ***HTML element*** or an ***Array*** of HTML elements that will be nested within the element. 

The first argument can be the props Object or the HTML Element(s).

```javascript
import { H1, DIV, IMG, SECTION, H2 } from "oxidizer"

// the first argument can be props
new H1({
    class:"h1-class",
    textContent:"my header"
})

// or an array of HTML elements to be nested
new DIV([
    new H1({
        textContent:"my header"
    }),
    new H2({
        textContent:"my subheader"
    })
])

// text can also be nested
new H2([
    "My Sub Header",
    new H3([
        "My Sub Sub Header"
    ])
])

// note that HTML elements do not have to be nested in an Array
new SECTION({class:'sect-class'},
    new IMAGE({
        src:"./images/myimage.png"
    })
)
```

<hr/>

## Props
The props argument is an object whose properties are to be applied to the HTML element being created.

The props object can be accessed using the <code>.props</code> property.

Changes made to an elements .props object will cause the element to rerender.

```javascript
import {UL, LI} from "oxidizer"

const btn = new BUTTON({
    class:"inactive"
    textContent:"Click Me"
})

const activateBtn = () => {
    btn.props.class = "active";
}
```
## Extending Elements
Oxidizer's HTML Element classes can be extended to increase functionality. 

 * CSS can be applied to the element using the <code>css</code> getter method
    * importing and using Oxidizer's <code>css</code> will provide syntax highlighting
 * Class methods are applied directly to the HTML element

```javascript
import {UL, LI, css} from "oxidizer"

export class List extends UL {
    
    get css(){
        return css`
            li {
                list-style-type:none;
            }
        `
    }

    changeList(list){
        this.props.items = list;
    }

    render(props){
        const {items} = props;
        return (
            items.map(item => 
                new LI({textContent:item})
            )
        )
    }
}

```
<hr/>

## Custom Elements

Custom Element classes can be created by extending Oxidizer's <code>Component</code> class.

* Note that class names are two words. HTML custom classes require a hyphen in between two words. The LabeledInput class, for example, would create a "labeled-input" custom tag. 

* Just like when extending elements, we can add CSS to the component using the <code>css</code> getter function

* Class methods are applied directly to the HTML element

<br/><br/>

*Below we'll create a custom element component named <code>NavContainer</code> and show how it can be deployed in a sample app*
<br/> 

<i style="color:gray;">NavContainer.mjs</i>

```javascript
import {Component, css, UL, LI,  P} from "oxidizer"


export class NavContainer extends Component {
    
    get css(){
        return css`
            nav-container {
                display:flex;
            }
            ul {
                list-style-type: none; 
                padding: 0;
                margin: 0; 
            }
            .active {
                color:red;
            }
        `
    }

    switchTab(newTab){
        this.props.activeTab = newTab;
    }

    render(props){

        const {activeTab,items} = props;
        const content = items[activeTab].description;

        return [
            new UL([
                ...items.map((item,index) => 
                    new LI({
                        tab:index,
                        textContent:item.name,
                        class:(activeTab === index) ? "active": "",
                        onclick(){                            
                            const container = this.parentElement.parentElement;
                            container.switchTab(this.props.tab)
                        }
                    })
                )
            ]),
            new P({textContent: content})
        ]
    }
}
```

<i style="color:gray;">app.mjs</i>

```javascript
import {NavContainer} from 

const props = {
    items : [
        {
            name: "Racoon",
            description: "The raccoon is a mammal native to North America.",
        },
        {
            name: "Lemur",
            description: "The Lemur is a mammals endemic to Madagascar.",
        },
        {
            name: "Panda",
            description: "Pandas are a species of bear endemic to China.",
        }
    ],
    activeTab:0,
}

const container = new NavContainer(props)

document.body.append(container);
```

HTML Output
```html
<nav-container>
    <ul>
        <li class="active">Racoon</li>
        <li class="">Lemur</li>
        <li class="">Panda</li>
    </ul>
    <p>Pandas are a species of bear endemic to China.</p>
</nav-container>
```