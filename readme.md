# Oxidizer

Oxidizer is a web development framework intended as a lightweight substitute for React.

## Features
- lightweight & simple
- Seamless integration of HTML, CSS, and JS
- Utilizes "props" concept, including inheritances and propogation.

## Installation
    npm install oxidizer --save-dev

---

## Getting Started

### Intrinsic Elements 
- Each HTML element has a corresponding Oxidizer class.
- i.e. < div > elements are created through the *DIV* class.

``` javascript
import { DIV } from "oxidizer"

const props = {
    class: "div-class",
    textContent: "some div element"
}

const divEl = new DIV(props);

/*
    <div class="div-class">
        some div element
    </div> 
*/
```

