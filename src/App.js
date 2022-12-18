import * as core from './core'
import './components'
import { appRoutes } from './constants/appRoutes'
import { authService } from './services/Auth'
import { eventBus } from "./core"
import { appEvents } from "./constants/appEvents"
import "./Auth/PrivateRoute"

export class App extends core.Component {

  constructor() {
    super()
    this.state = {
       isLoading: false,
       error: '',
       isLogged: false,
    }
 }

 toggleIsLoading() {
    this.setState((state) => {
       return {
          ...state,
          isLoading: !state.isLoading,
       };
    })
 }

 getUser() {
    this.toggleIsLoading()
    authService
       .init()
       .then((user) => {
          authService.user = user
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
                error: error.message
             }
          })
       })
       .finally(() => {
          this.toggleIsLoading()
       })
 }

   onSignOut = () => {
      this.toggleIsLoading()
      authService.signOut()
         .then(() => {
            this.setState((state) => {
               return {
                  ...state,
                  isLogged: false,
               }
            })
         })
       .catch((error) => {
          this.setState((state) => {
             return {
                ...state,
                error: error.message
             }
          })
       })
       .finally(() => {
          this.toggleIsLoading()
       })
 }

      setIsLogged = () => {
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
         eventBus.on(appEvents.userLoggedOut, this.onLogOut);
      }

      componentWillUnmount() {
         eventBus.off(appEvents.userAuthorized, this.setIsAuthorized);
         eventBus.off(appEvents.userLoggedOut, this.onLogOut);
      }

  render() {
      return this.state.isLoading
          ? `<motorcycle-preloader is-loading="${this.state.isLoading}"></motorcycle-preloader>`
          : `
             <div class="page">
                   <motorcycle-router>
                      <motorcycle-header>
                         <motorcycle-header is-logged="${this.state.isLogged}"></motorcycle-header>
                      </motorcycle-header>
                            <main>
                               <motorcycle-route path="${appRoutes.home}" component="home-page" title="Home"></motorcycle-route>
                               <motorcycle-route path="${appRoutes.productShowroomFilter}" component="product-showroom-page" title="Our Showroom"></motorcycle-route>
                               <motorcycle-route path="${appRoutes.productCard}/:id" component="product-card-page" title="Product Card"></motorcycle-route>
                               <motorcycle-route path="${appRoutes.signIn}" component="sign-in-page" title="SignIn"></motorcycle-route>
                               <motorcycle-route path="${appRoutes.signUp}" component="sign-up-page" title="SignUp"></motorcycle-route>
                               <motorcycle-route path="${appRoutes.cart}" component="cart-page" title="Cart"></motorcycle-route>
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


// <private-route path="${appRoutes.admin}" component="admin-page" title="Admin"></private-route>

//  
                              //  
                              // <motorcycle-route path="${appRoutes.errorPage}" component="error-page" title="Not Found"></motorcycle-route>