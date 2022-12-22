import { Component } from "../../../core";

export class ShowroomPage extends Component {
   
    render() {
        return `
            <motorcycle-showroom-filter></motorcycle-showroom-filter>
            <motorcycle-search-results></motorcycle-search-results>
        `
    }
}

customElements.define('product-showroom-page', ShowroomPage)