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
                                        <option class="search-box__input-option" value="1">All Conditions</option>
                                        <option class="search-box__input-option" value="2">New</option>
                                        <option class="search-box__input-option" value="3">Used</option>
                                    </select>
                                    <select class="search-box__input2">
                                        <option class="search-box__input-option" value="1">All Brands</option>
                                        <option class="search-box__input-option" value="2">Aprilia</option>
                                        <option class="search-box__input-option" value="3">BMW</option>
                                        <option class="search-box__input-option" value="4">Ducati</option>
                                        <option class="search-box__input-option" value="5">Harley Davidson</option>
                                        <option class="search-box__input-option" value="6">Honda</option>
                                        <option class="search-box__input-option" value="7">Husqvarna</option>
                                        <option class="search-box__input-option" value="8">Kawasaki</option>
                                        <option class="search-box__input-option" value="9">KTM</option>
                                        <option class="search-box__input-option" value="10">Suzuki</option>
                                        <option class="search-box__input-option" value="11">Triumph</option>
                                        <option class="search-box__input-option" value="12">Yamaha</option>
                                    </select>
                                </div>

                                <div class="search__box2">
                                    <select class="search-box__input3">
                                        <option class="search-box__input-option" value="1">All Categories</option>
                                        <option class="search-box__input-option" value="2">Adventure</option>
                                        <option class="search-box__input-option" value="3">ATV</option>
                                        <option class="search-box__input-option" value="4">Cruiser</option>
                                        <option class="search-box__input-option" value="5">Scooter</option>
                                        <option class="search-box__input-option" value="6">Sport Naked</option>
                                        <option class="search-box__input-option" value="7">Sport Touring</option>
                                        <option class="search-box__input-option" value="8">Street</option>
                                        <option class="search-box__input-option" value="9">Supersport</option>
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