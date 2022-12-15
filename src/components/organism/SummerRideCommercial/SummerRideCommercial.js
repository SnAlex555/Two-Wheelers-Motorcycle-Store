import { Component } from "../../../core"
import './SummerRideCommercial.scss'

export class SummerRideCommercial extends Component{
    render() {
        return`
        <section class="summer-ride__commercial">

                    <div class="summer-ride__wrapper">
                        <h2 class="summer-ride__commercial-title">
                                GET READY FOR YOUR SUMMER RIDE
                        </h2>

                        <p class="summer-ride__commercial-title-subscription">
                                Save yourself up to 20% off on your purchase this summer
                        </p>

                        <p class="summer-ride__commercial-title-link">
                                Valid until August 31, 2022
                        </p>
                    </div>
            
            </section> 
        `
    }
}

customElements.define ('motorcycle-summer-ride-commercial',SummerRideCommercial)