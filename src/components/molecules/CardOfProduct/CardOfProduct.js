import { Component } from "../../../core";
import './CardOfProduct.scss'

export class CardOfProduct extends Component {
    render () {
        return `
        <div class="product__card">

            <img class="product__card-image" src="./images/our-showroom/Suzuki GSX-R1000 (2004).jpg" alt="suzuki-GSX-R1000">

            <div class="product__card-box">
                <p class="product__title">Suzuki GSX-R1000 (2004)</p>
                <p class="product__condition">Used</p>
            </div>

                <p class="product__price">$6,899</p>

            <div class="product__card-stock-availability">
                <p class="product__in-stock">Stock:<br>1</p>
                <p class="product__color">Color(s):<br>Blue/White</p>
            </div>

            <button class="product__details">
            <p class="product__details-description">Details
            </button>
        </div>
        `
    }
}

customElements.define('motorcycle-card-of-product', CardOfProduct )