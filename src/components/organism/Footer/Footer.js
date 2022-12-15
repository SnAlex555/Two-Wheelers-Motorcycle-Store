import { Component } from "../../../core";
import './footer.scss'


export class Footer extends Component {
    render() {
        return `
        <footer class="footer">

            <div class="footer__wrapper">
                <div class="footer__top">

                    <div class="footer__box1">
                        <h4 class="footer__two-wheelers-title">two wheelers
                        </h4>

                        <p class="footer__adress">2005 Broken Dream Blvd
                            Daytona Beach, FL 32122
                        </p>

                        <p class="footer__telephone">(343)-7509-2453
                        </p>

                    </div>

                    <div class="footer__box2">
                        <ul class="footer__ul">
                            <li class="footer__li">
                                <a class="footer__link" href>New Inventory</a>
                            </li>

                            <li class="footer__li">
                                <a class="footer__link" href>Used Inventory</a>
                            </li>

                            <li class="footer__li">
                                <a class="footer__link" href>Service Center</a>
                            </li>

                            <li class="footer__li">
                                <a class="footer__link" href>Custom Parts</a>
                            </li>

                            <li class="footer__li">
                                <a class="footer__link" href>Riding Tips</a>
                            </li>

                        </ul>
                    </div>

                    <div class="footer__box3">
                        <ul class="footer__ul">
                            <li class="footer__li">
                                <a class="footer__link" href>Test Ride</a>
                            </li>

                            <li class="footer__li">
                                <a class="footer__link" href>Finance</a>
                            </li>

                            <li class="footer__li">
                                <a class="footer__link" href>Our Blog</a>
                            </li>

                            <li class="footer__li">
                                <a class="footer__link" href>About Us</a>
                            </li>

                            <li class="footer__li">
                                <a class="footer__link" href>Media</a>
                            </li>

                        </ul>

                    </div>

                    <div class="footer__box4">

                        <h4 class="footer__store_hours-title">STORE HOURS
                        </h4>

                        <p class="footer__working-hours">Weekdays: 8 AM - 3 PM
                        </p>

                        <p class="footer__working-hours">Saturday: 8 AM - 2 PM
                        </p>

                        <p class="footer__working-hours">Sunday/National Holiday: Closed</p>
                    </div>

                </div>

                <div class="footer__bottom">

                    <div class="footer__bottom-wrapper">
                            <div class="footer__copyrights">
                                <p class="footer__copyrights-description">©2021 TwoWheelers.com. All rights reserved</p>
                            </div>
            
                            <div class="footer__icons">
            
                                <svg xmlns="http://www.w3.org/2000/svg" class="footer__icon" width="19px" height="40px">
                                    <use xlink:href="./images/footer/footer-sprite.svg#facebook"></use>
                                </svg>
            
                                <svg xmlns="http://www.w3.org/2000/svg" class="footer__icon" width="37px" height="37px">
                                    <use xlink:href="./images/footer/footer-sprite.svg#insta"></use>
                                </svg>
            
                                <svg xmlns="http://www.w3.org/2000/svg" class="footer__icon" width="37px" height="37px">
                                    <use xlink:href="./images/footer/footer-sprite.svg#in"></use>
                                </svg>
            
                                <svg xmlns="http://www.w3.org/2000/svg" class="footer__icon" width="40px" height="40px">
                                    <use xlink:href="./images/footer/footer-sprite.svg#youtube"></use>
                                </svg>
            
                            </div>
                    </div>
                </div>
            </div> 

            <div class="footer__wrapper-wrapper">
                <div class="footer__top">
                        <div class="footer__wrapper-container1">   
                            <div class="footer__box1-wrapper-wrapper">
                                <h4 class="footer__two-wheelers-title">two wheelers
                                </h4>

                                <p class="footer__adress">2005 Broken Dream Blvd
                                    Daytona Beach, FL 32122
                                </p>

                                <p class="footer__telephone">(343)-7509-2453
                                </p>

                            </div>

                            <div class="footer__box2-wrapper-wrapper">
                                
                                <h4 class="footer__store_hours-title">STORE HOURS
                                </h4>

                                <p class="footer__working-hours">Weekdays: 8 AM - 3 PM
                                </p>

                                <p class="footer__working-hours">Saturday: 8 AM - 2 PM
                                </p>

                                <p class="footer__working-hours">Sunday/National Holiday: Closed</p>
                                
                            </div>

                        </div> 

                        <div class="footer__wrapper-container2"> 
                            <div class="footer__box3-wrapper-wrapper">
                                <ul class="footer__ul">
                                    <li class="footer__li">
                                        <a class="footer__link" href>Test Ride</a>
                                    </li>

                                    <li class="footer__li">
                                        <a class="footer__link" href>Finance</a>
                                    </li>

                                    <li class="footer__li">
                                        <a class="footer__link" href>Our Blog</a>
                                    </li>

                                    <li class="footer__li">
                                        <a class="footer__link" href>About Us</a>
                                    </li>

                                    <li class="footer__li">
                                        <a class="footer__link" href>Media</a>
                                    </li>

                                </ul>

                            </div>

                            <div class="footer__box4-wrapper-wrapper">
                                <ul class="footer__ul">
                                    <li class="footer__li">
                                        <a class="footer__link" href>New Inventory</a>
                                    </li>

                                    <li class="footer__li">
                                        <a class="footer__link" href>Used Inventory</a>
                                    </li>

                                    <li class="footer__li">
                                        <a class="footer__link" href>Service Center</a>
                                    </li>

                                    <li class="footer__li">
                                        <a class="footer__link" href>Custom Parts</a>
                                    </li>

                                    <li class="footer__li">
                                        <a class="footer__link" href>Riding Tips</a>
                                    </li>

                                </ul>
                            </div>

                </div>

            </div>     

            <div class="footer__bottom">

                <div class="footer__bottom-wrapper">
                        <div class="footer__copyrights">
                            <p class="footer__copyrights-description">©2021 TwoWheelers.com. All rights reserved</p>
                        </div>
        
                        <div class="footer__icons">
        
                            <svg xmlns="http://www.w3.org/2000/svg" class="footer__icon" width="19px" height="40px">
                                <use xlink:href="./images/footer/footer-sprite.svg#facebook"></use>
                            </svg>
        
                            <svg xmlns="http://www.w3.org/2000/svg" class="footer__icon" width="37px" height="37px">
                                <use xlink:href="./images/footer/footer-sprite.svg#insta"></use>
                            </svg>
        
                            <svg xmlns="http://www.w3.org/2000/svg" class="footer__icon" width="37px" height="37px">
                                <use xlink:href="./images/footer/footer-sprite.svg#in"></use>
                            </svg>
        
                            <svg xmlns="http://www.w3.org/2000/svg" class="footer__icon" width="40px" height="40px">
                                <use xlink:href="./images/footer/footer-sprite.svg#youtube"></use>
                            </svg>
        
                        </div>
                </div>
            </div>
        </footer>      
     `
    }
}

customElements.define('motorcycle-footer',Footer);