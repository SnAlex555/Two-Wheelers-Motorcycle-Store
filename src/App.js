import * as core from './core'
import { Component } from "./core"
import './components'

export class App extends core.Component {

  render() {
    return `
    <div class="page">
    <motorcycle-header></motorcycle-header>
    <motorcycle-main-top-commercial></motorcycle-main-top-commercial>
    <motorcycle-summer-ride-commercial></motorcycle-summer-ride-commercial>
    <motorcycle-why-us></motorcycle-why-us>
    <motorcycle-services></motorcycle-services>
    <motorcycle-showroom-filter></motorcycle-showroom-filter>
    <motorcycle-search-results></motorcycle-search-results>
    <motorcycle-product-card></motorcycle-product-card>
    <motorcycle-footer></motorcycle-footer>
    </div>
      `
    
  }
}

customElements.define("motorcycle-app", App);
