import * as core from "../../../core"
import { databaseService } from "../../../services";
import { appRoutes } from "../../../constants/appRoutes";

export class ProductCardPage extends core.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            motorcycle: null,
        }
    }

    static get observedAttributes(){
        return ["id"]
    }

    toggleIsLoading() {
        this.setState((state) => {
          return {
            ...state,
            isLoading: !state.isLoading,
          };
        });
      }

      getMotorcycle() {
        this.toggleIsLoading();
        databaseService
          .getDocument("motorcycle", this.props.id)
          .then((data) => {
            this.setState((state) => {
              return {
                ...state,
                motorcycle: data,
              };
            });
          })
          .finally(() => {
            this.toggleIsLoading();
          });
      }
    
      componentDidMount() {
        this.getMotorcycle();
      }

    render() {
        return `
            ${
                !this.state.motorcycle
                ? `<motorcycle-preloader is-loading="${this.state.isLoading}"></motorcycle-preloader>`
                : `
                    <section class="product__info">
        
                        <div class="product__info-box1">
        
                            <img class="product__info-img" src="${this.state.motorcycle.poster}" alt="${this.state.motorcycle.model}">
        
                            <div class="product__info-information">
                                <p class="product__info-description">
                                    ${this.state.motorcycle.model}
                                </p>
                                <p class="product__info-status">Status:${this.state.motorcycle.status}</p>
                                    
                                <p class="product__info-price">
                                    ${this.state.motorcycle.price}
                                </p>
                                <div class="product__info-colors">
                                    <p class="product__info-color">Color(s):${this.state.motorcycle.color}</p>
                                </div>
                                <p class="product__info-stock">Stock:${this.state.motorcycle.stock}</p>
                                <div class="product__info-add-buttons">
                                    <button class="product__info-add-to-cart">
                                        <motorcycle-link to="${appRoutes.errorPage}">
                                            <span class="product__info-add-to-cart-description">Add to Cart</span>
                                        </motorcycle-link>
                                    </button>
                                </div>
        
                            </div>
        
                        </div>
        
                        <div class="product__info-box2">
        
                            <div class="specification__box">
        
                                <button class="specification__button">
                                    <motorcycle-link to="${appRoutes.errorPage}
                                        <span class="specification__description">Specifications</span>
                                    </motorcycle-link>
                                </button>
        
                                <button class="return__button">
                                    <motorcycle-link to="${appRoutes.productShowroomFilter}">
                                    <span class="return__button-description">Return to Showroom</span>
                                    </motorcycle-link>
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
            `}
            `
        }        
    }

customElements.define('product-card-page', ProductCardPage)