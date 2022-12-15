import { Component } from "../../../core"
import './Services.scss'

export class Services extends Component {
    render() {
        return `
        <section class="services">
                    <div class="services__wrapper">
                        <button class="our__showroom">
                            <p class="our__showroom-description">OUR SHOWROOM
                            </p>
                        </button>

                        <div class="services__box1">

                            <button class="test__ride">
                                <p class="services__description">TEST RIDE
                                </p>
                            </button>

                            <button class="custom__parts">
                                <p class="services__description">CUSTOM PARTS
                                </p>
                            </button>

                        </div>

                        <div class="services__box2">

                            <button class="our__service">
                                <p class="services__description">OUR SERVICE
                                </p>
                            </button>

                            <button class="finance">
                                <p class="services__description">FINANCE
                                </p>
                            </button>
                        </div>

                        <div class="services__wrapper-wrapper">
                            <div class="services__wrapper-box1">

                                <button class="test__ride">
                                    <p class="services__description">TEST RIDE
                                    </p>
                                </button>

                                <button class="custom__parts">
                                    <p class="services__description">CUSTOM PARTS
                                    </p>
                                </button>

                            </div>

                            <div class="services__wrapper-box2">

                                <button class="our__service">
                                    <p class="services__description">OUR SERVICE
                                    </p>
                                </button>

                                <button class="finance">
                                    <p class="services__description">FINANCE
                                    </p>
                                </button>
                            </div>
                        </div>    
                    </div>     
                </section> 
        `
    }
}

customElements.define('motorcycle-services', Services)