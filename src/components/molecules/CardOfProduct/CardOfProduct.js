import * as core from "../../../core";
import { appRoutes } from "../../../constants/appRoutes"
import './CardOfProduct.scss'

export class CardOfProduct extends core.Component {
    static get observedAttributes() {
        return ["poster", "model", "status", "price", "stock", "color", "id"]
    }

    render () {
        return `
        <div class="product__card">
            <motorcycle-link to="${appRoutes.productCard}/${this.props.id}">
            <img class="product__card-image" src="${this.props.poster}" alt="${this.props.model}">
            </motorcycle-link>

            <div class="product__card-box">
                <p class="product__title">${this.props.model}</p>
                <p class="product__condition">${this.props.status}</p>
            </div>

            <p class="product__price">${this.props.price}</p>

            <div class="product__card-stock-availability">
                <p class="product__in-stock">Stock:<br>${this.props.stock}</p>
                <p class="product__color">Color(s):<br>${this.props.color}</p>
            </div>

            <button class="product__details">
                <motorcycle-link to="${appRoutes.productCard}/${this.props.id}">Details</motorcycle-link>
            </button>
            </div>
        </div>
        `
    }
}

customElements.define('motorcycle-card-of-product', CardOfProduct )