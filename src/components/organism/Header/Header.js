import { appRoutes } from '../../../constants/appRoutes'
import * as core from '../../../core'
import './header.scss'

export class Header extends core.Component{

    render() {
        return `
        
        <header class="header">

            <nav class="header__navigation">

                <motorcycle-link to= "${appRoutes.home}">Home
                    <img class="header__logo" src="images/header-logo/two-wheelers-logo.svg" alt="two-wheelers-logo">
                </motorcycle-link>

                <div class="header__navigation-inner">
                    <ul class="header__navigation-list">

                        <li class="header__navigation-list-item">
                            <motorcycle-link to= "${appRoutes.home}">Home</motorcycle-link>
                        </li>

                        <li class="header__navigation-list-item">
                            <motorcycle-link to= "${appRoutes.ourshowroom}">Motorcycles</motorcycle-link>
            
                            <img class="header__navigation-sub-menu-arrow" src="./images/header-sub-menu/sub-menu-arrow.png" alt="sub-menu-arrow">
                            
                            <ul class="header__navigation-sub-menu">

                                <li>
                                    <motorcycle-link to= "${appRoutes.ourshowroom}"
                                            <p class="header__navigation-sub-menu-link-description">Showroom</p>
                                    </motorcycle-link>       
                                </li>

                                <li>
                                    <a href=" " class="header__navigation-sub-menu-link">
                                        <p class="header__navigation-sub-menu-link-description">Services</p>
                                    </a>   
                                </li>

                                <li>
                                    <a href=" " class="header__navigation-sub-menu-link">
                                        <p class="header__navigation-sub-menu-link-description">Parts</p>
                                    </a> 
                                </li>

                                <li>
                                    <a href=" " class="header__navigation-sub-menu-link">
                                        <p class="header__navigation-sub-menu-link-description">Test Drive</p>
                                    </a> 
                                </li>

                            </ul>
                        </li>

                        <li class="header__navigation-list-item">
                            <a class="header__navigation-link">Our Blog</a>
                        </li>

                        <li class="header__navigation-list-item">
                            <a class="header__navigation-link">Contact Us</a>
                        </li>

                    </ul>

           
               
                    <button class="header__log-in">
                        <p class="header__log-in-text">Login</p>
                    </button>

                    <li class="header__burger">
                        <svg class="header__burger-button" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="7" width="40" height="5" rx="2.5" fill="gold"/>
                            <rect y="17" width="40" height="5" rx="2.5" fill="gold"/>
                            <rect y="27" width="40" height="5" rx="2.5" fill="gold"/>
                        </svg>
                    </li>

                    <div class="header__mobile-wrapper">

                    <motorcycle-link to= "${appRoutes.home}">Home
                            <img class="header__logo--mobile" src="/images/header-logo/two-wheelers-logo.svg" alt="two-wheelers-logo">
                        </motorcycle-link>

                        <button class="header__log-in--mobile">
                            <p class="header__log-in-text--mobile">Login</p>
                        </button>

                    </div>  

                </div>
            </nav>
        </header>      
        `
    }

}

customElements.define('motorcycle-header', Header);