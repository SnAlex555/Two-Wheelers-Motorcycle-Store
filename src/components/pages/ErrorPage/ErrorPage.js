import { Component } from "../../../core";
import './ErrorPage.scss'

export class ErrorPage extends Component {

    render() {
        return `
        <section class="error__page">

            <div class="error__page-box1">
                <h1 class="error__page-title">Oops....</h1>
                <h2 class="error__page-subtitle">Page not found</h2>
                <p class="error__page-description">Unfortunately, the page you’re looking for is either under maintenance, unaccessible, or there’s a server problem in our site. 
                    Please go back to home page.</p>
                <a class="error__page-link" href="/">
                    <p class="error__page-link-text">Go back to Home</p>
                </a>
            </div>

            <div class="error__page-box2">

            </div>
        </section>
        `
    }
}

customElements.define('error-page', ErrorPage)