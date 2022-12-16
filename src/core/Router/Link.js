import { Component } from "../Component";

export class Link extends Component {
    constructor() {
        super();
        this.IsShadow = true
    }

   static get obsrvedAttributes() {
    return ['to']
   }

   OnClick = (evt) => {
        evt.preventDefault();
        this.dataset('change-route', { target: this.props.to})
   }

   componentWillUnmount(){
      this.addEventListener('click', this.onClick)
   }

   componentWillUnmount(){
        this.removeEventListener('click', this.onClick)
   }

   render () {
        return `
            <a href="${thisprops.to}">
                <slot></slot>
            </a>
        `
   }
}

customElements.define('motorcycle-link', Link)