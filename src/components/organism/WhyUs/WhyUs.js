import { Component } from "../../../core"
import './WhyUs.scss' 

export class WhyUs extends Component {
    render() {
        return`
        <section class="why__us">

                <div class="why__us-wrapper">

                    <img class="why__us-bike" src="/images/why-us/why-us-bike.jpg" alt="why-us" height="446px" width="582px">

                    <div class="why__us-description">

                        <h3 class="why__us-title">Why us?
                        </h3>

                        <p class="why__us-subscription">
                            Since 2019, twowheelers sells hundreds of motorcycles that are hot for the roads for a reasonable
                            price.
                            From low engine size to bigger engine, we have all.
                            Want to enjoy the sunset on the road or you’re just a speed freak who likes to race against your
                            friends on the racetrack?
                            You’ll find the motorcycle that suits you.
                        </p>

                        <p class="why__us-subscription">
                            Our employees are the best on the field with many experiences on a motorcycle and tons of knowledge
                            about it, so come visit us and do not hesitate to ask us questions.
                            We welcome those who are new with a motorcycle and wonder how it feels to explore places on a
                            motorcycle.
                        </p>

                    </div>

                </div>   
        
            </section>  
        `
    }

}

customElements.define('motorcycle-why-us', WhyUs)