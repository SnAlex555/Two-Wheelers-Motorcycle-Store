import { Component } from "../../../core"
import { databaseService } from "../../../services";
import './SearchResults.scss'

export class SearchResults extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            motorcycle: []
        }
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    getMotorcycle() {
        this.toggleIsLoading();
        databaseService
        .read('motorcycle')
        .then((data) => {
           this.setState(() => {
            return {
                ...this.state,
                motorcycle:data,
            }
           })
        }
        )
        .finally(() => {
            this.toggleIsLoading();
        }
        )
    }

    componentDidMount() {
        this.getMotorcycle()
    }

    render(){
        return `
        <div class="search__results">

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Suzuki GSX-R1000 (2004).jpg" alt="suzuki-GSX-R1000">

                                <div class="product__card-box">
                                    <p class="product__title">Suzuki GSX-R1000 (2004)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$6,899</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>1</p>
                                    <p class="product__color">Color(s):<br>White</p>
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
                                    <p class="product__color">Color(s):<br>Green</p>
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

                                    <p class="product__price">$12,999</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>2</p>
                                    <p class="product__color">Color(s):<br>Red</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>
        

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/2017-Yamaha-MT-09.jpg" alt="yamaha-MT-09">

                                <div class="product__card-box">
                                    <p class="product__title">Yamaha MT-09(2017 - 2020)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$9,459 </p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>6</p>
                                    <p class="product__color">Color(s):<br>Silver</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Harley Davidson Forty- Eight (2021).jpg" alt="harley-davidson-forty-eight ">

                                <div class="product__card-box">
                                    <p class="product__title">Harley Davidson Forty- Eight (2021)</p>
                                    <p class="product__condition">New</p>
                                </div>

                                    <p class="product__price">$11,499</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>5</p>
                                    <p class="product__color">Color(s):<br>Red</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Honda CB650 neo (2019).jpg" alt="honda-CB650-neo ">

                                <div class="product__card-box">
                                    <p class="product__title">Honda CB650 neo (2019)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$8,199</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>5</p>
                                    <p class="product__color">Color(s):<br>Red</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/BMW S1000RR (2011).jpg" alt="BMW-S1000RR">

                                <div class="product__card-box">
                                    <p class="product__title">BMW S1000RR (2011)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$11,299</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>1</p>
                                    <p class="product__color">Color(s):<br>White</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>
                        
                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Triumph Boneville (2021).jpg" alt="triumph-boneville">

                                <div class="product__card-box">
                                    <p class="product__title">Triumph Boneville (2021)</p>
                                    <p class="product__condition">New</p>
                                </div>

                                    <p class="product__price">$12,300</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>2</p>
                                    <p class="product__color">Color(s):<br>Red</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Yamaha R7 (2021).jpg" alt="yamaha-r7 ">

                                <div class="product__card-box">
                                    <p class="product__title">Yamaha R7 (2021)</p>
                                    <p class="product__condition">New</p>
                                </div>

                                    <p class="product__price">$8,799</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>4</p>
                                    <p class="product__color">Color(s):<br>Blue</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Kawasaki Ninja 400 ABS (2021).jpg" alt="kawasaki-ninja ">

                                <div class="product__card-box">
                                    <p class="product__title">Kawasaki Ninja 400 ABS (2021)</p>
                                    <p class="product__condition">New</p>
                                </div>

                                    <p class="product__price">$5,599</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>4</p>
                                    <p class="product__color">Color(s):<br>Red</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Harley Davidson Street 750 (2020).jpg" alt="harley-750">

                                <div class="product__card-box">
                                    <p class="product__title">Harley Davidson Street 750 (2020)</p>
                                    <p class="product__condition">New</p>
                                </div>

                                    <p class="product__price">$7,199</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>2</p>
                                    <p class="product__color">Color(s):<br>Red</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>
                       
                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Yamaha R6 (2020).jpg" alt="yamaha-r6.jpg">

                                <div class="product__card-box">
                                    <p class="product__title">Yamaha R6 (2020)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$13,749</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>6</p>
                                    <p class="product__color">Color(s):<br>Blue</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Yamaha MT-07 (2019 - 2020).jpg" alt="yamaha-MT-07">

                                <div class="product__card-box">
                                    <p class="product__title">Yamaha MT-07 (2019 - 2020)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$6,099</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>3</p>
                                    <p class="product__color">Color(s):<br>Blue</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Yamaha V Star 1100 (2000 - 2009).jpg" alt="yamaha-V-star ">

                                <div class="product__card-box">
                                    <p class="product__title">Yamaha V Star 1100 (2000 - 2009)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$4,999</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>4</p>
                                    <p class="product__color">Color(s):<br>Black</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Yamaha MT-03 (2020).jpg" alt="yamaha-mt-03">

                                <div class="product__card-box">
                                    <p class="product__title">Yamaha MT-03 (2020)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$4,499</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>5</p>
                                    <p class="product__color">Color(s):<br>Black</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>

                            <div class="product__card">

                                <img class="product__card-image" src="./images/our-showroom/Yamaha XMAX (2018 - 2020).jpg" alt="yamaha-XMAX">

                                <div class="product__card-box">
                                    <p class="product__title">Yamaha XMAX (2018 - 2020)</p>
                                    <p class="product__condition">Used</p>
                                </div>

                                    <p class="product__price">$6,799</p>

                                <div class="product__card-stock-availability">
                                    <p class="product__in-stock">Stock:<br>6</p>
                                    <p class="product__color">Color(s):<br>Silver</p>
                                </div>

                                <button class="product__details">
                                <p class="product__details-description">Details
                                </button>
                            </div>


        `
    }
}

customElements.define('motorcycle-search-results', SearchResults)