import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from '../../../constants/appRoutes'
import { eventBus } from "../../../core";
import * as core from '../../../core'
import './header.scss'

export class Header extends core.Component{

  constructor() {
      super();
      this.state = {
          activePath: window.location.pathname,
      };
    }
    
    static get observedAttributes() {
      return ["is-logged"];
    }
    
    onSignOut = (evt) => {
      evt.preventDefault();
      if (evt.target.closest(".sign-out-link")) {
        eventBus.emit(appEvents.userLoggedOut);
      }
    };
    
    onChangeRoute = (evt) => {
        this.setState((state) => {
          return {
            ...state,
            activePath: evt.detail.target,
          };
        });
      };
    
      isActiveLink(path) {
        return this.state.activePath === path ? "active" : "";
      }
    
      componentDidMount() {
        eventBus.on(appEvents.changeRoute, this.onChangeRoute);
        this.addEventListener("click", this.onSignOut);
      }
    
      componentWillUnmount() {
        this.removeEventListener("click", this.onSignOut);
      }
    

    render() {
        return `
        
        <header class="header">

            <nav class="header__navigation">

                <motorcycle-link to="${appRoutes.home}">
                    <img class="header__logo" src="images/header-logo/two-wheelers-logo.svg" alt="two-wheelers-logo">
                </motorcycle-link>

                <div class="header__navigation-inner">
                    <ul class="header__navigation-list">
                        <li class="header__navigation-list-item">
                            <motorcycle-link to="${appRoutes.home}">
                              <span class="link ${this.isActiveLink(appRoutes.home)}">Home</span>
                            </motorcycle-link>
                        </li>

                        <li class="header__navigation-list-item">
                            <motorcycle-link to="${appRoutes.productShowroomFilter}">
                              <span class="link ${this.isActiveLink(appRoutes.productShowroomFilter)}">Motorcycles</span>
                            </motorcycle-link>
                        </li>

                        <li class="header__navigation-list-item">
                            <motorcycle-link to="${appRoutes.admin}">
                              <span class="link ${this.isActiveLink(appRoutes.admin)}">Admin</span>
                            </motorcycle-link>
                        </li>
                      
                        ${
                          JSON.parse(this.props['is-logged'])
                          ? `
                                          
                            <button class="header__sign-out">
                              <a href="#" class="sign-out-link">
                                <p class="header__sign-out-text">Sign Out</p>
                              </a>
                            </button>
                            `
                          : `
                            <button class="header__reg">
                              <motorcycle-link to="${appRoutes.signIn}">
                                <span class="link ${this.isActiveLink(appRoutes.signIn)}">Sign In</span>
                              </motorcycle-link>
                            </button>

                            <button class="header__reg">
                              <motorcycle-link to="${appRoutes.signUp}">
                                <span class="link ${this.isActiveLink(appRoutes.signUp)}">Sign Up</span>
                              </motorcycle-link>
                            </button>
                            <button class="header__burger-button">
                                <img class="header__burger" src="./images/header-sub-menu/hamburger.png" alt="header-burger">
                            </button>

                          <div class="header__mobile-wrapper">

                              <motorcycle-link to="${appRoutes.home}">
                                  <img class="header__logo--mobile" src="/images/header-logo/two-wheelers-logo.svg" alt="two-wheelers-logo">
                              </motorcycle-link>

                              <button class="header__reg--mobile">
                              <motorcycle-link to="${appRoutes.signIn}">
                                <span class="link ${this.isActiveLink(appRoutes.signIn)}">Sign In</span>
                              </motorcycle-link>
                            </button>

                            <button class="header__reg--mobile"">
                              <motorcycle-link to="${appRoutes.signUp}">
                                <span class="link ${this.isActiveLink(appRoutes.signUp)}">Sign Up</span>
                              </motorcycle-link>
                            </button>
                          </div>  
                            `
                        }
                    </ul>

           
                    
                    <button class="header__burger-button">
                        <img class="header__burger" src="./images/header-sub-menu/hamburger.png">
                    </button>

                    <div class="header__mobile-wrapper">

                        <motorcycle-link to="${appRoutes.home}">
                            <img class="header__logo--mobile" src="/images/header-logo/two-wheelers-logo.svg" alt="two-wheelers-logo">
                        </motorcycle-link>

                        <button class="header__sign-out--mobile">
                            <p class="header__sign-out-text--mobile">Sign Out</p>
                        </button>

                    </div>  

                </div>
            </nav>
            <nav class="header__nav-mobile">
                                <ul class="header__nav-mobile-list">
                                    <li class="header__nav-mobile-list-item" >
                                        <motorcycle-link to="${appRoutes.home}">
                                            <span class="link ${this.isActiveLink(appRoutes.home)}">Home</span>
                                        </motorcycle-link>
                                    </li>
                            
                                    <li class="header__nav-mobile-list-item" >
                                        <motorcycle-link to="${appRoutes.productShowroomFilter}">
                                            <span class="link ${this.isActiveLink(appRoutes.productShowroomFilter)}">Motorcycles</span>
                                        </motorcycle-link>
                                    </li>
                                </ul>  
                        </nav>
        </header>      
        `
    }

}

customElements.define('motorcycle-header', Header);

