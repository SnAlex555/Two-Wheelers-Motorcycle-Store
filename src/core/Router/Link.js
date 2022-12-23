import { appEvents } from "../../constants/appEvents"
import { Component } from "../Component"
import { eventBus } from "../EventBus";
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
    eventBus.emit(appEvents.changeRoute, { target: this.props.to });
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
            <style>
                a{
                    text-decoration: none;
                    font-family: "Inter";
                    font-size: 20px;
                    font-size: 600;
                    color: var(--light-blue);
                    transition: color 0.3s linear;
                }
               
            </style>
                <slot></slot>
            </a>
        `
   }
}

customElements.define('motorcycle-link', Link)