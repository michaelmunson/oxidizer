import { analyzer, arrConverter } from '../utils/utils.mjs'

export class Root {
    constructor (query) {
        this.element = (analyzer.type(query, HTMLElement)) ? query : document.querySelector(query)
    }

    render (nodes) {
        this.clear()
        this.append(nodes)
    }

    clear () {
        this.element.innerHTML = ''
        return this
    }

    append (nodes) {
        nodes = arrConverter(nodes)
        nodes.forEach(node => this.element.append(node))
        return this
    }

    prepend (nodes) {
        nodes = arrConverter(nodes)
        nodes.forEach(node => this.element.prepend(node))
        return this
    }

    before (nodes) {
        nodes = arrConverter(nodes)
        nodes.forEach(node => this.element.before(node))
        return this
    }

    after (nodes) {
        nodes = arrConverter(nodes)
        nodes.forEach(node => this.element.after(node))
        return this
    }
}

export default Root
