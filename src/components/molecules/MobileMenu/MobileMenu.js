import { Component } from '../../../core';
import './MobileMenu.scss'
import { appRoutes } from '../../../constants/appRoutes';

export class MobileMenu extends Component{
    constructor() {
        super()
        this.state = {
            isVisible: false,
        }
    }


    onClick= (evt) => {
        const target = evt.target
        if(target.closest('.motorcycle-header-burger')) {
            this.setState((state) =>{
                return {
                    ...state,
                    isVisible:true,
                }
            })
        }
        if(target.closest('motorcycle-header-burger')) {
            this.setState((state) =>{
                return {
                    ...state,
                    isVisible:false,
                }
            })
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.onClick)
    }

    render() {
        return `
            ${
               this.state.isVisible
                     ? ` <nav class="header__nav-mobile">
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
                        </nav>`
                        : ''
                     }        
                 `
             }
         
         }

customElements.define('mobile-menu', MobileMenu)