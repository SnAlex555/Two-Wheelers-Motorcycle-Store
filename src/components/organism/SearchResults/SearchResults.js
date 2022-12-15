import { Component } from "../../../core"
import './SearchResults.scss'

export class SearchResults extends Component {
    render () {
        return `
        <div class="search__results">

                        <div class="search__results-box1">

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

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Triumph Street Triple R (2020).jpg" alt="triumph-street-triple-r">

                                <div class="product__card-box">
                                    <p class="product__title">Triumph Street Triple R (2020)</p>
                                    <p class="product__condition">New</p>
                                </div>

                                    <p class="product__price">$12,499</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>1</p>
                                    <p class="product__color">Color(s):<br>Black</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Kawasaki Versys 650 (2020).jpg" alt="kawasaki-versys-650">

                                <div class="product__card-box">
                                    <p class="product__title">Kawasaki Versys 650 (2020)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$8,299</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>5</p>
                                    <p class="product__color">Color(s):<br>Green/White</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Ducati 1199 Panigale (2012).jpg" alt="Ducati-1199">

                                <div class="product__card-box">
                                    <p class="product__title">Ducati 1199 Panigale (2012)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$12,499 - $12,999</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>2</p>
                                    <p class="product__color">Color(s):<br>Glossy Red/Tricolore</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>
                        </div>
        `
    }
}

customElements.define('motorcycle-search-results', SearchResults)