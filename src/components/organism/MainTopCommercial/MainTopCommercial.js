import { Component } from "../../../core"
import './MainTopCommercial.scss'


export class MainTopCommercial extends Component{
    render() {
        return`
            <section class="main__top-commercial">
                    
                        <div class="main__top-commercial-box1">
                            <h1 class="main__top-commercial-title">Find your dream motorcycle here!</h1>

                            <p class="main__top-commercial-title-subscription">
                                We have 100+ collections of new and used motorcycles from big names
                                such as Honda, Kawasaki, Yamaha, Ducati, etc. We will give the best
                                price you can get and great quality motorcycle.
                            </p>

                            <p class="main__top-commercial-title-description"> Let's find one!</p>
                        </div>

                        <div class="main__top-commercial-box2">

                        </div>
                
            </section> 
        `
    }
}

customElements.define('motorcycle-main-top-commercial', MainTopCommercial);