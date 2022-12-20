import { Component } from "../core";
import { authService } from "../services/Auth";
import { appRoutes } from "../constants/appRoutes";

export class PrivateRoute extends Component{
    connectedCallback() {
        this.isShadow = true;
    }

    static get observedAttributes(){
      return ['path'];
    }

    componentDidMount(){
      if(!authService.user) {
        window.dispatch('change-routes', { 
          target: appRoutes[this.props.path ?? "signUp"]
        });
      }
    }

    render() {
      return`
      <slot></slot>
      `
    }

} 

customElements.define('private-route', PrivateRoute)






// import { Component } from "../core";
// import { authService } from "../services/Auth";
// import { appRoutes } from "../constants/appRoutes";
// import { appEvents } from "../constants/appEvents";

// export class PrivateRoute extends Component {
//   static get observedAttributes() {
//     return ["path", "component", "title"];
//   }

//   componentDidMount() {
//     if (!authService.user) {
//         this.dispatch('change-route', { target: appRoutes[this.props.path ?? 'signUp'] })
//     }
// }

//   render() {
//     return `<motorcycle-route 
//       path="${this.props.path}" 
//       component="${this.props.component}" 
//       title="${this.props.title}"></motorcycle-route>`;
//   }
// }

// customElements.define("private-route", PrivateRoute);