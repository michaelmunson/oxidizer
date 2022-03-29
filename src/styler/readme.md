<style>
    [gray] {
        color:gray
    }
    [ital] {
        font-style : italic
    }
    [bold] {
        font-weight : bold
    }
    code {
        font-size : .9em
    }
</style>

# CSS w/ the Styler class
The <code>Styler</code> class allows Stylesheets to be created and rendered via Javascript through the CSSOM

## Usage
<i>Example</i>

```js
import {Styler, css, $} from "inert"; 

Styler.config
.addProperties({
    m : v => ({margin : v}),
    p : v => ({padding : v}),
})
.addUnitDefaults({
    m : "px",
    p : "px",
});

const stylesheet = new Styler(props => ({
    '@import' : [
        'url("styles.css")', 
        'url("www.example.org")'
    ],
    '@media screen and (min-width: 900px)' : {
        'article' : {
            display : 'flex';
        }
    }
    '.btn' : {
        m : 10,
        p : 5,
        '&.primary' : {
            color : css.bootstrap.colors.primary,
        },
        '&.active' : {
            borderColor : 'yellow',
        },
        click(){
            this.addClass('.active')
            // or
            return {
                borderColor : 'yellow'
            }
        }
    },
    '.row' : {
        display : 'flex',
        flexFlow : 'row nowrap',
        '.col' : {
            flex : '1 0 auto'
        }
    }
}));

stylesheet.render(); 
```
```css
@import url("styles.css");
@import url("www.example.org");

@media screen and (min-width: 900px) {
    article : {
            display : flex;
    }
}
.btn {
    margin : 10px;
    padding : 5px;
}
.btn.primary  {
    color : #007bff;
}
.btn.active  {
    border-color : yellow;
}
.row {
    display : flex;
    flex-flow : row nowrap;
}
.row > .col {
    flex : 1 0 auto
}
```

#### Syntax
* The syntax for styler objects borrows heavily from SCSS
    * Use "&" to connect nested selectors (i.e. "&:hover")
#### Event Functions
* Event functions nested within a selector acts as a simple way to add event listeners on the parent selector
    * <i>this</i> is bound to a JQuery-esque wrapper object
    * returning a style object will update a nodes css with said styles


<hr>

## Configuration 
Access : <code>Styler.config </code>

<u gray>Recognized config properties</u>

#### onError : <code>Function</code> (err)
* called when an error is encountered
#### onUnsupported : <code>Function</code> (stylerDeclarations, prop, val)
* called when a styler declarations object encounters an unsupported css declaration
#### properties : <code>Object</code>
* an object of declaration : value properties
    * the values should be functions returning an object
* Example:
    ```js
    Styler.config.addProperties({
        mrg : v => ({margin : v}),
        ht : v => ({ height : isNaN(v) ? v : v+"%"})
    })
    new Styler(props => ({
        "html,body" : {
            mrg : "0px",
            ht : 0,
        }
    }))
    /* 
    CSS ->
        html,body {
            margin : 0px,
            height : 0%
        }
    */
    ```

#### unitDefaults : <code>Object</code>
* an object of declaration : value properties
    * the values should be functions returning an object
* Example:
    ```js
    Styler.config.addUnitDefaults({
        margin : "px",
        height : "%"
    })
    new Styler(props => ({
        "html,body" : {
            margin : 0,
            height : 100,
        }
    }))
    /* 
    CSS ->
        html,body {
            margin : 0px,
            height : 0%
        }
    */
    ```

<hr>
<u gray>Functions</u>

#### <code>.addProperties</code> (object)
- Assigns values from object passed to <i>config.properties</i>
#### <code>.addUnitDefaults</code> (object)
- Assigns values from object passed to <i>config.unitDefaults</i>




