import * as core from './core'
import './components'
import { appRoutes } from './constants/appRoutes'
import { authService } from './services/Auth'
import { appEvents } from "./constants/appEvents";
import { eventBus } from "./core";
import "./auth/PrivateRoute"


export class App extends core.Component {

   constructor() {
      super();
      this.state = {
         isLoading: false,
         isLogged: false,
         error: "",
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

   getUser () {
      this.toggleIsLoading()
      authService
      .init()
      .then((user) =>{
         authService.user = user;
         this.setState((state) => {
            return {
               ...state,
               isLogged: Boolean(user)
            }
         })
      })
      .catch((error) => {
         this.setState((state) => {
            return {
               ...state,
               error: error.message,
            }
         });
      })
      .finally(() => {
         this.toggleIsLoading();
      });
   }

   onSignOut = () =>{
      this.toggleIsLoading()
      authService
      .signOut()
      .then(() => {
         then.setState((state) => {
            return {
               ...state,
               isLogged: false,
            }
         });
      })
      .catch((error) => {
         this.setState((state) => {
            return {
               ...state,
               error: error.message,
            }
         });
      })
      .finally(() => {
         this.toggleIsLoading();
      });
   }

   setIsAuthorized = () => {
      this.setState((state) => {
         return {
            ...state,
            isLogged: true,
         }
      })
   }

   componentDidMount() {
      this.getUser();
      eventBus.on(appEvents.userAuthorized, this.setIsAuthorized);
      eventBus.on(appEvents.userLoggedOut, this.onSignOut);
    }
  
    componentWillUnmount() {
      eventBus.off(appEvents.userAuthorized, this.setIsAuthorized);
      eventBus.off(appEvents.userLoggedOut, this.onSignOut);
    }

  render() {
      return this.state.isLoading
        ? ` <motorcycle-preloader is-loading="${this.state.isLoading}"></motorcycle-preloader>`
         : `
             <div class="page">
                  <motorcycle-router>
                        <motorcycle-header is-logged="${this.state.isLogged}"></motorcycle-header>
                              <main>
                                 <motorcycle-route path="${appRoutes.home}" component="home-page" title="Home"></motorcycle-route>
                                 <motorcycle-route path="${appRoutes.productShowroomFilter}" component="product-showroom-page" title="Our Showroom"></motorcycle-route>
                                 <motorcycle-route path="${appRoutes.productCard}/:id" component="product-card-page" title="Product Card"></motorcycle-route>
                                 <private-route>
                                    <motorcycle-route path="${appRoutes.admin}" component="admin-page" title="Admin"></motorcycle-route>
                                 </private-route>
                                 <motorcycle-route path="${appRoutes.signIn}" component="sign-in-page" title="Sign In"></motorcycle-route>
                                 <motorcycle-route path="${appRoutes.signUp}" component="sign-up-page" title="Sign Up"></motorcycle-route>
                                 <motorcycle-route path="${appRoutes.errorPage}" component="error-page" title="Not Found"></motorcycle-route>
                                 <motorcycle-outlet></motorcycle-outlet>
                              </main>
                        <motorcycle-footer></motorcycle-footer>
                  </motorcycle-router>    
           </div>
      `
   }
  }

customElements.define("motorcycle-app", App);
           