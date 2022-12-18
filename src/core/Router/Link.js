import { appEvents } from "../../constants/appEvents"
import { Component } from "../Component"
import { eventBus } from "../EventBus/EventBus"
import './Link.scss'

export class Link extends Component {
  constructor() {
    super();
    this.isShadow = true
  }

  static get observedAttributes() {
    return ["to"];
  }

  onClick = (evt) => {
    evt.preventDefault();
    eventBus.emit('change-route', { target: this.props.to });
  };

  componentDidMount() {
    this.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onClick);
  }

   render () {
        return `
            <a href="${this.props.to}" class="motorcycle-link">
                <slot></slot>
            </a>
        `
   }
}

customElements.define('motorcycle-link', Link)