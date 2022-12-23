import { Component } from "../../../core"
import './ShowroomFilter.scss'

export class ShowroomFilter extends Component {
    render() {
        return `
        <section class="our-showroom__filter">

                <div class="filter__box">

                    <div class="search__inventary">
                
                            <h2 class="search__inventary_title">SEARCH INVENTORY
                            </h2>

                            <div class="search__inventary-search">

                                <div class="search__box1">
                                    <select class="search-box__input1">
                                        <option class="search-box__input-option" value="All Conditions">All Conditions</option>
                                        <option class="search-box__input-option" value="New">New</option>
                                        <option class="search-box__input-option" value="Used">Used</option>
                                    </select>
                                    <select class="search-box__input2">
                                        <option class="search-box__input-option" value="All Brands">All Brands</option>
                                        <option class="search-box__input-option" value="Aprilia">Aprilia</option>
                                        <option class="search-box__input-option" value="BMW">BMW</option>
                                        <option class="search-box__input-option" value="Ducati">Ducati</option>
                                        <option class="search-box__input-option" value="Harley Davidson">Harley Davidson</option>
                                        <option class="search-box__input-option" value="Honda">Honda</option>
                                        <option class="search-box__input-option" value="Husqvarna">Husqvarna</option>
                                        <option class="search-box__input-option" value="Kawasaki">Kawasaki</option>
                                        <option class="search-box__input-option" value="KTM">KTM</option>
                                        <option class="search-box__input-option" value="Suzuki">Suzuki</option>
                                        <option class="search-box__input-option" value="Triumph">Triumph</option>
                                        <option class="search-box__input-option" value="Yamaha">Yamaha</option>
                                    </select>
                                </div>

                                <div class="search__box2">
                                    <select class="search-box__input3">
                                        <option class="search-box__input-option" value="All Colors">All Colors</option>
                                        <option class="search-box__input-option" value="Red">Red</option>
                                        <option class="search-box__input-option" value="Blue">Blue</option>
                                        <option class="search-box__input-option" value="Green">Green</option>
                                        <option class="search-box__input-option" value="Orange">Orange</option>
                                        <option class="search-box__input-option" value="Black">Black</option>
                                        <option class="search-box__input-option" value="Silver">Silver</option>
                                        <option class="search-box__input-option" value="White">White</option>
                                    </select>
                                    <input class="search__box-text-input" type="text" placeholder="Select model manually" >
                
                                </div>

                                <div class="search__buttons">
                                    <button class="search__search">
                                        <p class="search__buttons-description">Search</p>
                                    </button>
                                    <button class="search__clear">
                                        <p class="search__buttons-description">Clear Filter</p>
                                    </button>
                                </div>
                            </div>

                            <div class="search__buttons-adapt">
                                <button class="search__search">
                                    <p class="search__buttons-description">Search</p>
                                </button>
                                <button class="search__clear">
                                    <p class="search__buttons-description">Clear Filter</p>
                                </button>
                            </div>
                    
                    </div>

                    <div class="intersectional__box">

                        <p class="intersectional__description">Displaying 1 - 12 of 36</p>

                        <div class="intersectional__box-select-container">
                            <select class="intersectional__box-select1">
                                <option class="intersectional__box-select-option" value="1">Most Relevant</option>
                                <option class="intersectional__box-select-option" value="2">Less Relevant</option>
                            </select>

                            <select class="intersectional__box-select2">
                                <option class="intersectional__box-select-option" value="1">Page 1</option>
                                <option class="intersectional__box-select-option" value="2">Page 2</option>
                            </select>
                        </div>
                    </div>

                    <div class="intersectional__box-line"></div>

        `
    }
}

customElements.define('motorcycle-showroom-filter', ShowroomFilter)