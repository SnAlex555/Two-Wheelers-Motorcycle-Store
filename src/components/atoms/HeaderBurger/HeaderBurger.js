import { Component } from "../../../core";
import './HeaderBurger.scss'

export class HeaderBurger extends Component {
    render () {
        return `
        <li class="header__burger">
            <svg class="header__burger-button" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="40" height="5" rx="2.5" fill="gold"/>
                <rect y="17" width="40" height="5" rx="2.5" fill="gold"/>
                <rect y="27" width="40" height="5" rx="2.5" fill="gold"/>
            </svg>
        </li>
        `
    }
}

customElements.define('motorcycle-header-burger', HeaderBurger )