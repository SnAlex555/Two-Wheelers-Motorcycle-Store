import { Component } from "../../../core";
import './HeaderBurger.scss'

export class HeaderBurger extends Component {
    render () {
        return `
        <button class="header__burger-button">
            <img class="header__burger" src="./images/header-sub-menu/hamburger.png">
        </button>

        `
    }
}

customElements.define('motorcycle-header-burger', HeaderBurger )