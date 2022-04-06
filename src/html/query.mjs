import { isArr, isNum, isStr } from '../../utils/utils.mjs';
import css from "../css.mjs";

function insert (position, nodes) {
    const positionMap = {
        beforeend: this.toEnd,
        afterend: this.after,
        beforebegin: this.before,
        afterbegin: this.prepend
    }
    if (nodes == null) {
        nodes = position
        position = 'beforeend'
    }
    if (!isArr(nodes)) nodes = [nodes]
    for (const node of nodes) {
        const fn = positionMap[position]
        fn.call(this, node)
    }
}
function on (event, callback, options = {}) {
    event = event.split(' ')
    for (const e of event) {
        this.addEventListener(e, callback, options)
    }
    return this
}
function observe (callbacks = {}) {
    const config = {
        attributes: 'attributes' in callbacks,
        childList: 'childList' in callbacks,
        subtree: 'subtree' in callbacks ? callbacks.subtree : false
    }
    const targetNode = this
    const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if ('childList' in callbacks && mutation.type === 'childList') {
                callbacks.childList(mutation)
            }
            if ('attributes' in callbacks && mutation.type === 'attributes') {
                callbacks.attributes(mutation)
            }
        }
    }
    const observer = new MutationObserver(callback)
    observer.observe(targetNode, config)
    if (this.observers) this.observers.push(observer)
    else this.observers = [observer]
    return this
}
function clearListeners (clearChildren = false) {
    if (clearChildren) {
        this.parentNode.replaceChild(this.cloneNode(true), this)
    } else {
        const clone = this.cloneNode(false)
        while (this.hasChildNodes()) this.appendChild(this.firstChild)
        this.parentNode.replaceChild(clone, this)
    }
    return this
}
function addClass (...classes) {
    const cleaned = []
    for (const cls of classes) cleaned.push(...cls.split(' '))
    this.classList.add(...cleaned)
    return this
}
function removeClass (...classes) {
    const cleaned = []
    for (const cls of classes) cleaned.push(...cls.split(' '))
    this.classList.remove(...cleaned)
    return this
}
function replaceClass (classOld, classNew) {
    this.classList.replace(classOld, classNew)
    return this
}
function toggleClass (...classes) {
    const cleaned = []
    for (const cls of classes) cleaned.push(...cls.split(' '))
    for (const cls of cleaned) this.classList.toggle(cls)
    return this
}
function shiftClass (classes, from = '*') {
    classes = classes.split(' ')
    if (from === '*') {
        document.querySelectorAll('*').forEach((node) => node.classList.remove(...classes))
        this.addClass(...classes)
    }
    if (isNum(from)) {
        let node = this
        if (from < 0) from *= -1
        for (let i = from; i > 0; i--) {
            node = node.parentNode
        }
        node.classList.remove(...classes)
        this.addClass(...classes)
    }
    return this
}
function classes (...classes) {
    if (classes.length === 0) return this.classList
    const cleaned = []
    for (const cls of classes) cleaned.push(...cls.split(' '))
    for (const cls of cleaned) {
        if (cls.startsWith('+')) this.addClass(cls.slice(1))
        else if (cls.startsWith('-')) this.removeClass(cls.slice(1))
        else if (cls.startsWith('?')) this.toggleClass(cls.slice(1))
        else if (cls.startsWith('!')) this.shiftClass(cls.slice(1))
    }
    return this
}
function html (...DOMStrings) {
    if (DOMStrings.length === 0) { return this.innerHTML }
    this.innerHTML = DOMStrings.join('')
    return this
}
function append (...nodes) {
    for (const node of nodes) {
        if (node == null) continue
        if (isStr(node)) this.insertAdjacentHTML('beforeend', node)
        else if (isArr(node)) node.forEach((n) => this.insertAdjacentElement('beforeend', n))
        else this.insertAdjacentElement('beforeend', node)
    }
    return this
}
function prepend (...nodes) {
    for (const node of nodes) {
        if (isStr(node)) this.insertAdjacentHTML('afterbegin', node)
        else if (isArr(node)) node.forEach((n) => this.insertAdjacentElement('afterbegin', n))
        else this.insertAdjacentElement('afterbegin', node)
    }
    return this
}
function before (...nodes) {
    for (const node of nodes) {
        if (isStr(node)) this.insertAdjacentHTML('beforebegin', node)
        else if (isArr(node)) node.forEach((n) => this.insertAdjacentElement('beforebegin', n))
        else this.insertAdjacentElement('beforebegin', node)
    }
    return this
}
function after (nodes) {
    for (const node of nodes) {
        if (isStr(node)) this.insertAdjacentHTML('afterend', node)
        else if (isArr(node)) node.forEach((n) => this.insertAdjacentElement('afterend', n))
        else this.insertAdjacentElement('afterend', node)
    }
    return this
}
function txt (...text) {
    if (text.length === 0) { return this.textContent }
    this.textContent = text.join('')
    return this
}
function attr (name, value) {
    if (name == null && value == null) {
        return this.attributes
    } if (name && value == null) {
        return this.getAttribute(name)
    } if (name && value) {
        this.setAttribute(name, value)
    }
    return this
}
function toggleAttr (name, force = true) {
    this.toggleAttribute(name, force)
    return this
}
function removeAttr (name) {
    this.removeAttribute(name)
    return this
}
function val (value) {
    if (value == null) {
        return this.getAttribute('value')
    }
    this.setAttribute('value', value)
    return this
}
function x (xPosition) {
    if (!xPosition) { return this.offsetLeft }
    this.style.left = xPosition
    return this
}
function y (yPosition) {
    if (!yPosition) { return this.offsetLeft }
    this.style.top = yPosition
    return this
}
function height (height) {
    if (!height) { return this.offsetHeight }
    this.style.height = height
    return this
}
function width (width) {
    if (!width) { return this.offsetWidth }
    this.style.width = width
    return this
}
function offset () {
    return {
        top: this.offsetTop,
        left: this.offsetLeft,
        height: this.offsetHeight,
        width: this.offsetWidth
    }
}
function find (selectorString) {
    return new Query(this.querySelector(selectorString))
}
function findAll (selectorString, filter = (a) => true) {
    if (isStr(filter)) filter = (q) => q.matches(filter)
    return $(this.querySelectorAll(selectorString))
}
function parent () {
    return new Query(this.parentNode)
}
function ancestors (filter = (a) => true) {
    const fn = (typeof filter === 'string') ? (a) => a.matches(filter) : filter
    const ancestorNodes = []
    let currNode = this
    while (!(currNode instanceof Document)) {
        ancestorNodes.push(currNode.parentNode)
        currNode = currNode.parentNode
    }
    return ancestorNodes.filter(fn)
}
function childs (filter = () => true) {
    if (isStr(filter)) filter = (node) => node.matches(filter)
    let children = [...this.childNodes]
    children = children.filter((node) => node.nodeName !== '#text')
    return children.filter((node) => filter.call(node, node)).map((n) => $(n, 0))
}
function inView () {
    const rect = this.getBoundingClientRect()
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth)
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)
    return (vertInView && horInView)
}

class Query extends Array {
    constructor (query, position) {
        super()
        if (query instanceof HTMLElement) query = [query]
        if (isStr(query)) query = document.querySelectorAll(query)
        for (const node of query) {
            this.push(node)
        }
        if (typeof position === 'number') {
            return this[position]
        }
    }

    static exists (tagName) {
        return document.querySelectorAll(tagName).length > 0
    }

    static get head () {
        return $('head')
    }

    static get body () {
        return $('body')
    }

    insert (...nodes) {
        this.forEach(node => {
            insert.apply(node, nodes);
        })
    }

    css (styles) {
        const c = css(styles)
        this.forEach(node => {
            for (const p in c) {
                node[p] = c[p];
            }
        })
        return this;
    }

    shiftClass (...clses) {
        this.forEach(node => {
            shiftClass.apply(node, clses)
        })
        return this;
    }

    /**
     * @param {string} event - event string (i.e. "click")
     * @param {function} callback - event string (i.e. "click")
     * @param {object} options - listener options
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * @returns {HTMLElement}
    */
    on (event, callback, options) {
        this.forEach((node) => on.apply(node, [event, callback, options]))
        return this
    }

    /**
     * @param {object} callbacks - Functions for MutationObserver
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
     * @returns {HTMLElement}
    */
    observe (observerConfig = { attributes: (mutation) => mutation, childList: (mutation) => mutation, subtree: (mutation) => mutation }) {
        this.forEach((node) => observe.apply(node, [observerConfig]))
        return this
    }

    /**
     * @param {boolean} clearChildren - remove listeners from children ?
     * @returns {HTMLElement}
    */
    clearListeners (clearChildren = false) {
        this.forEach((node) => clearListeners.apply(node, []))
        return this
    }

    /**
     * @param {string | array } classes - string or list of strings to add
     * @returns {HTMLElement}
    */
    addClass (...classes) {
        this.forEach((node) => addClass.apply(node, [...classes]))
        return this
    }

    /**
     * @param {string | array } classes - string or list of strings to add
     * @returns {HTMLElement | Map}
    */
    classes (...classes) {
        this.forEach((node) => classes.apply(node, [...classes]))
        return this
    }

    /**
     * @param {...string | array } classes - string or list of strings to remove
     * @returns {HTMLElement}
    */
    removeClass (...classes) {
        this.forEach((node) => removeClass.apply(node, [...classes]))
        return this
    }

    /**
     * @param {string | array } classOld - String or list of strings to replace
     * @param {string} classNew - String to replace classOld
     * @returns {HTMLElement}
    */
    replaceClass (...classes) {
        this.forEach((node) => replaceClass.apply(node, [...classes]))
        return this
    }

    /**
     * @param {string | array } - String or list of strings to toggle
     * @returns {HTMLElement}
    */
    toggleClass (...classes) {
        this.forEach((node) => toggleClass.apply(node, [...classes]))
        return this
    }

    /**
     * @description - this.insertAdjacentHTML("beforeend",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */
    html (...DOMStrings) {
        if (DOMStrings.length > 0) {
            this.forEach((node) => html.apply(node, [...DOMStrings]))
            return this
        }
        const m = new Map()
        this.forEach((node) => m.set(node, html.call(node)))
        return m
    }

    /**
     * @description - this.insertAdjacentHTML("beforeend",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */
    append (...nodes) {
        this.forEach((node) => append.apply(node, [...nodes]))
        return this
    }

    /**
     * @description - this.insertAdjacentHTML("afterbegin",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */
    prepend (...nodes) {
        this.forEach((node) => prepend.apply(node, [...nodes]))
        return this
    }

    /**
     * @description - this.insertAdjacentHTML("beforebegin",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */
    before (...nodes) {
        this.forEach((node) => before.apply(node, [...nodes]))
        return this
    }

    /**
     * @description - this.insertAdjacentHTML("afterend",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */
    after (...nodes) {
        this.forEach((node) => after.apply(node, [...nodes]))
        return this
    }

    /**
     * @description - this.textContent = (DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */
    txt (...text) {
        if (text.length > 0) {
            this.forEach((node) => txt.apply(node, [...text]))
            return this
        }
        const m = new Map()
        this.forEach((node) => m.set(node, txt.call(node)))
        return m
    }

    /**
     * @description - this.setAttribute(name,value)
     * @param {string} name - attribute name (optional)
     * @param {string} value - attribute value (optional)
     * @returns {NamedNodeMap | String | HTMLElement} - NamedNodeMap if 0 args, attribute value if 1 arg, this if 2 args
    */
    attr (name, value) {
        if (!name) {
            const m = new Map()
            this.forEach((node) => m.set(node, attr.call(node, [])))
            return m
        } if (!value) {
            const m = new Map()
            this.forEach((node) => m.set(node, attr.call(node, [name])))
            return m
        }
        this.forEach((node) => attr.apply(node, [name, value]))
        return this
    }

    /**
     * @description - this.toggleAttribute(name,force)
     * @param {string} name - attribute name to toggle
     * @param {boolean} force - attribute value (optional) (default = true)
     * @returns {HTMLElement} - return this
    */
    toggleAttr (name, force = false) {
        this.forEach((node) => toggleAttr.apply(node, [name, force]))
        return this
    }

    /**
     * @description - this.removeAttribute(name)
     * @param {string} name - attribute name to remove
     * @returns {HTMLElement} - return this
    */
    removeAttr (name) {
        this.forEach((node) => removeAttr.apply(node, [name]))
        return this
    }

    /**
     * @description - this.value = value
     * @param {string} value - attribute name to remove
     * @returns {string | HTMLElement} - return this.value if 0 args, or this if 1 arg
    */
    val (value) {
        if (!value) {
            const m = new Map()
            this.forEach((node) => m.set(node, val.call(node, [])))
            return m
        }
        this.forEach((node) => val.apply(node, [value]))
        return this
    }

    /**
     * @description xPosition? this.style.left = xPosition : this.offsetLeft
     * @param {number} xPosition (optional)
    * @returns {number | HTMLElement} returns number if no arg provided
    */
    x (xPosition) {
        if (!xPosition) {
            const m = new Map()
            this.forEach((node) => m.set(node, node.offsetLeft))
            return m
        }
        this.forEach((node) => x.apply(node, [xPosition]))
        return this
    }

    /**
     * @description yPosition? this.style.top = yPosition : this.offsetTop
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    y (yPosition) {
        if (!yPosition) {
            const m = new Map()
            this.forEach((node) => m.set(node, node.offsetTop))
            return m
        }
        this.forEach((node) => y.apply(node, [yPosition]))
        return this
    }

    /**
     * @description height? this.style.height = height : this.offsetHeight
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    height (height) {
        if (!height) {
            const m = new Map()
            this.forEach((node) => m.set(node, node.offsetHeight))
            return m
        }
        this.forEach((node) => height.apply(node, [height]))
        return this
    }

    /**
     * @description height? this.style.width = width : this.offsetWidth
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    width (width) {
        if (!width) {
            const m = new Map()
            this.forEach((node) => m.set(node, node.offsetWidth))
            return m
        }
        this.forEach((node) => width.apply(node, [width]))
        return this
    }

    /**
     * @description height? this.style.height = height : this.offsetHeight
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */

    offset () {
        const m = new Map()
        this.forEach((node) => m.set(node, offset.apply(node, [])))
        return m
    }

    /**
     * @description wrapper for this.querySelector
     * @param {string} selectorString
     * @returns {Query}
    */
    find (selectorString) {
        const m = new Map()
        this.forEach((node) => {
            m.set(node, find.apply(node, [selectorString]))
        })
        return this
    }

    /**
     * @description wrapper for this.querySelectorAll
     * @param {string} selectorString
     * @param {function} filter filter for returned nodes
     * @returns {Query}
    */
    findAll (selectorString, filter = (a) => true) {
        const m = new Map()
        this.forEach((node) => {
            m.set(node, findAll.apply(node, [selectorString, filter]))
        })
        return this
    }

    /**
     * @description wrapper for this.parentNode
     * @returns {HTMLElement}
    */
    parent () {
        const m = new Map()
        this.forEach((node) => m.set(node, parent.apply(node, [])))
        return m
    }

    /**
     * @description array of ancestors up till :root
     * @param {function | string} filter filter for array, if string, filter is (str=str) => this.matches(str)
     * @returns {HTMLElement}
    */
    ancestors (filter = (a) => true) {
        const m = new Map()
        this.forEach((node) => m.set(node, ancestors.apply(node, [filter])))
        return m
    }

    /**
     * @description array of children
     * @param {function | string} filter filter for children array , if string, filter is (str=str) => child.matches(str)
     * @returns {HTMLElement}
    */
    childs (options) {
        options = { filter: (node) => true, textNode: false, ...options }
        const m = new Map()
        this.forEach((node) => m.set(node, childs.apply(node, [options])))
        return m
    }

    /**
     * @description returns boolean indicating whether this is in the visible window
     * @returns {boolean}
    */
    inView () {
        const m = new Map()
        this.forEach((node) => m.set(node, inView.apply(node, [])))
        return m
    }

    /**
     * @description returns boolean indicating whether this is in the visible window
     * @returns {boolean}
    */
    animations () {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getAnimations.apply(node, [])))
        return m
    }

    /** ******  EXTENSIONS *********** */
    /*
    const m = new Map()
    this.forEach(node => m.set(node, node..apply(node,[...args])));
    return m;
*/
    closest (filter = (a) => true) {
        const m = new Map()
        this.forEach((node) => {
            console.log(node.closest)
            m.set(node, node.closest.apply(node, [filter]))
        })
        return m
    }

    matches (selectorString) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.matches.apply(node, [selectorString])))
        return m
    }

    scroll (...args) {
        this.forEach((node) => node.scroll.apply(node, [...args]))
        return this
    }

    scrollBy (...args) {
        this.forEach((node) => node.scrollBy.apply(node, [...args]))
        return this
    }

    scrollIntoView (...args) {
        this.forEach((node) => node.scrollIntoView.apply(node, [...args]))
        return this
    }

    scrollIntoViewIfNeeded (...args) {
        this.forEach((node) => node.scrollIntoViewIfNeeded.apply(node, [...args]))
        return this
    }

    scrollTo (...args) {
        this.forEach((node) => node.scrollTo.apply(node, [...args]))
        return this
    }

    animate (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.animate.apply(node, [...args])))
        return m
    }

    attachShadow (...args) {
        this.forEach((node) => node.attachShadow.apply(node, [...args]))
        return this
    }

    computedStyleMap (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.computedStyleMap.apply(node, [...args])))
        return m
    }

    createShadowRoot (...args) {
        this.forEach((node) => node.createShadowRoot.apply(node, [...args]))
        return this
    }

    getAnimations (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getAnimations.apply(node, [...args])))
        return m
    }

    getAttribute (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getAttribute.apply(node, [...args])))
        return m
    }

    getAttributeNames (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getAttributeNames.apply(node, [...args])))
        return m
    }

    getAttributeNode (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getAttributeNode.apply(node, [...args])))
        return m
    }

    getAttributeNodeNS (...args) {
        this.forEach((node) => node.getAttributeNodeNS.apply(node, [...args]))
        return this
    }

    getAttributeNS (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getAttributeNS.apply(node, [...args])))
        return m
    }

    getBoundingClientRect (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getBoundingClientRect.apply(node, [...args])))
        return m
    }

    getClientRects (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getClientRects.apply(node, [...args])))
        return m
    }

    getElementsByClassName (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getElementsByClassName.apply(node, [...args])))
        return m
    }

    getElementsByTagName (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getElementsByTagName.apply(node, [...args])))
        return m
    }

    getElementsByTagNameNS (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.getElementsByTagNameNS.apply(node, [...args])))
        return m
    }

    hasAttribute (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.hasAttributes.apply(node, [...args])))
        return m
    }

    hasAttributeNS (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.hasAttributeNS.apply(node, [...args])))
        return m
    }

    hasAttributes (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.hasAttributes.apply(node, [...args])))
        return m
    }

    hasPointerCapture (...args) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.hasPointerCapture.apply(node, [...args])))
        return m
    }

    insertAdjacentElement (...args) {
        this.forEach((node) => node.insertAdjacentElement.apply(node, [...args]))
        return this
    }

    insertAdjacentHTML (...args) {
        this.forEach((node) => node.insertAdjacentHTML.apply(node, [...args]))
        return this
    }

    insertAdjacentText (...args) {
        this.forEach((node) => node.insertAdjacentText.apply(node, [...args]))
        return this
    }

    msZoomTo (...args) {
        this.forEach((node) => node.msZoomTo.apply(node, [...args]))
        return this
    }

    querySelector (query) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.querySelector.apply(node, [query])))
        return m
    }

    querySelectorAll (query) {
        const m = new Map()
        this.forEach((node) => m.set(node, node.querySelectorAll.apply(node, [query])))
        return m
    }

    releasePointerCapture (...args) {
        this.forEach((node) => node.releasePointerCapture.apply(node, [...args]))
        return this
    }

    removeAttribute (...args) {
        this.forEach((node) => node.removeAttribute.apply(node, [...args]))
        return this
    }

    removeAttributeNode (...args) {
        this.forEach((node) => node.removeAttributeNode.apply(node, [...args]))
        return this
    }

    removeAttributeNS (...args) {
        this.forEach((node) => node.removeAttributeNS.apply(node, [...args]))
        return this
    }

    replaceChildren (...args) {
        this.forEach((node) => node.replaceChildren.apply(node, [...args]))
        return this
    }

    replaceWith (...args) {
        this.forEach((node) => node.replaceWith.apply(node, [...args]))
        return this
    }

    requestFullscreen (...args) {
        this.forEach((node) => node.requestFullscreen.apply(node, [...args]))
        return this
    }

    requestPointerLock (...args) {
        this.forEach((node) => node.requestPointerLock.apply(node, [...args]))
        return this
    }

    setAttribute (...args) {
        this.forEach((node) => node.setAttribute.apply(node, [...args]))
        return this
    }

    setAttributeNode (...args) {
        this.forEach((node) => node.setAttributeNode.apply(node, [...args]))
        return this
    }

    setAttributeNodeNS (...args) {
        this.forEach((node) => node.setAttributeNodeNS.apply(node, [...args]))
        return this
    }

    setAttributeNS (...args) {
        this.forEach((node) => node.setAttributeNS.apply(node, [...args]))
        return this
    }

    setCapture (...args) {
        this.forEach((node) => node.setCapture.apply(node, [...args]))
        return this
    }

    setHTML (...args) {
        this.forEach((node) => node.setHTML.apply(node, [...args]))
        return this
    }

    setPointerCapture (...args) {
        this.forEach((node) => node.setPointerCapture.apply(node, [...args]))
        return this
    }

    toggleAttribute (...args) {
        this.forEach((node) => node.toggleAttribute.apply(node, [...args]))
        return this
    }
}

function $ (query, position) {
    return new Query(query, position)
}

$.head = Query.head
$.body = Query.body
$.exists = Query.exists

export {
    $,
    Query
};

export default $
