import { Component } from "../../../core";

export class ProductCardPage extends Component {

    render() {
        return `
        <motorcycle-product-card></motorcycle-product-card>
        `
}
}

customElements.define('product-card-page', ProductCardPage)