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


