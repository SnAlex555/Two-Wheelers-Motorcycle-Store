import { Componen, Component } from "../../../core"
import './ProductCard.scss'

export class ProductCard extends Component {
    render () {
        return `
        <section class="product__info">

            <div class="product__info-box1">

                <img class="product__info-img" src="./images/product-card-image/Ducati-1199-Panigale.jpg" alt="Ducati-1199-Panigale">

                <div class="product__info-information">
                    <p class="product__info-description">
                        Ducati 1199 Panigale (2012)
                    </p>
                    <p class="product__info-status">
                        Status: Used
                    </p>
                    <p class="product__info-price">
                        $12,499 - $12,999
                    </p>
                    <div class="product__info-colors">
                        <p class="product__info-color">Color(s):</p>
                        <svg class="product__info-picture" src="/images/product-card-image/product-cart-icons/red.svg" alt="red" width="35px" height="35px" ></svg>
                        <svg class="product__info-picture" src="/images/product-card-image/product-cart-icons/italian.svg" alt="italian" width="35px" height="35px"></svg>
                    </div>
                    <p class="product__info-stock">
                        Stock: 2
                    </p>
                    <div class="product__info-add-buttons">
                        <button class="product__info-add-to-cart">
                            <p class="product__info-add-to">Add to Cart</p>
                        </button>
                    </div>

                </div>

            </div>

            <div class="product__info-box2">

                <div class="specification__box">

                    <button class="specification__button">
                        <p class="specification__description">Specifications</p>
                    </button>

                    <button class="return__button">
                        <p class="specification__description">Return to Showroom</p>
                    </button>


                </div>

                <div class="check__other-box">

                    <h4 class="check__other-title">Check other motorcycles</h4>
                        <div class="check__other-items">

                            <div class="check__other-item1-container">
                                <button class="item1__button"></button>
                                <p class="item_description">Yamaha R6 (2020)</p>
                                <p class="item_price">$13,749</p>
                            </div>

                            <div class="check__other-item2-container">
                                <button class="item2__button"></button>
                                <p class="item_description">Triumph Street Triple R (2020)</p>
                                <p class="item_price">$10,499</p>
                            </div>

                            <div class="check__other-item3-container">
                                <button class="item3__button"></button>
                                <p class="item_description">Kawasaki Ninja H2 (2019)</p>
                                <p class="item_price">$24,499</p>
                            </div>
                            
                        </div>
                </div>

            </div>
            
        </section>
    `
    }
}

customElements.define('motorcycle-product-card', ProductCard)