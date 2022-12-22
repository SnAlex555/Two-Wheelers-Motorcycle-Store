import * as core from "../../../core"
import "./ProductCard.scss"

export class ProductCard extends core.Component {


    render () {
        return `
        <motorcycle-product-card>
        </motorcycle-product-card>
        `}
    }

  

customElements.define('motorcycle-product-card', ProductCard)


// // render () {
//     return `
// ${this.state.motorcycle.map(({ poster, model, status, price, stock, color, id }) =>  {
// //     return `
// //     <<motorcycle-product-card
// //     poster="${poster}"
// //     model="${model}"
// //     status="${status}"
// //     price="${price}"
// //     stock="${stock}"
// //     color="${color}"
// //     id="${id}"
// //     ></motorcycle-product-card>
// //     `;
// // }
// // ).join(' ')
// // } 
// //     `
// }
// }

{/* <section class="product__info">

<div class="product__info-box1">

    <img class="product__info-img" src="${this.state.motorcycle.poster}" alt="${this.state.motorcycle.model}">

    <div class="product__info-information">
        <p class="product__info-description">
            ${this.state.motorcycle.model}
        </p>
        <p class="product__info-status">
            ${this.state.motorcycle.status}
        </p>
        <p class="product__info-price">
            ${this.state.motorcycle.price}
        </p>
        <div class="product__info-colors">
            <p class="product__info-color">Color(s):</p>
            ${this.state.motorcycle.color}  
        </div>
        <p class="product__info-stock">
            ${this.state.motorcycle.stock}
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

</section> */}
