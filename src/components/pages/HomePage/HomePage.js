import { Component } from "../../../core"
import "../../organism"
import '../../../components'

export class HomePage extends Component {

    constructor() {
        super();
        this.state = {
          isLoading:false,
          };
        }

      toggleIsLoading(){
         this.setState((state) => {
            return {
            ...state,
            isLoading: !state.isLoading,
            };
        })
        }
    
    render() {
        return `  
        <motorcycle-preloader is-loading="${this.state.isLoading}">  
            <motorcycle-main-top-commercial></motorcycle-main-top-commercial>
            <motorcycle-summer-ride-commercial></motorcycle-summer-ride-commercial>
            <motorcycle-why-us></motorcycle-why-us>
            <motorcycle-services></motorcycle-services> 
        </motorcycle-preloader>`              
    }
}

customElements.define('home-page', HomePage)