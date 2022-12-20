import { Component, FormManager } from "../../../core"
import "../../molecules"
import "../../atoms"
import { Validator } from "../../../core"
import { initialFieldsState } from "./InitialState";

export class SignInPage extends Component {
  
  constructor() {
    super();
    this.state = {
      error: '',
      isLoading:false,
      fields: {
        ...initialFieldsState
      }
    }

    this.form = new FormManager()
  }

  toggleisLoading = () => {
    this.setState((state) => {
        return {
            ...state,
            isLoading: !state.isLoading
        }
    })
  }

  signIn = (data) => {
    this.toggleisLoading()
    authService
        .signIn(data.email, data.password)
        .then((user) => {
            authService.user = user
            this.dispatch('change-route', {target: appRoutes.home});
            this.dispatch('user-is-logged');
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
            this.toggleisLoading()
        })
}

    validateForm = (evt) => {
        if (evt.target.closest("motorcycle-input")) {
            this.form.init(this.querySelector(".registration-form"), {
            email: [
                Validator.email("Email is not valid"),
                Validator.required("The field should not be empty"),
                ],
                password: [Validator.required("The field should not be empty")],
                })
            }
        }

    validate = (evt) => {
        console.log(evt.detail)
        this.setState((state) => {
            return {
            ...state,
            fields: {
            ...state.fields,
            ...evt.detail,
                }
            }
        })
    }

  componentDidMount() {
        this.addEventListener('submit', this.form.handleSubmit(this.registerUser))
        this.addEventListener('click', this.validateForm)
        this.addEventListener('validate-controls', this.validate)
      }

  render () {

    const { fields: { email, password} } = this.state;

    return `
    <motorcycle-preloader is-loading="${this.state.isLoading}">
      <form class= "mt-5 registration-form">
      <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
        <motorcycle-input
          type="email"
          label="Email"
          control-name="email"
          value="${email.value}"
          is-valid="${email.isValid}"
          is-touched="${email.isTouched}"
          error-message="${email.errors?.message}"
        ></motorcycle-input>

        <motorcycle-input
          type="password"
          label="Password"
          control-name="password"
          class-name="first-pass"
          value="${password.value}"
          is-valid="${password.isValid}"
          is-touched="${password.isTouched}"
          error-message="${password.errors?.message}"
        ></motorcycle-input>
         <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      </motorcycle-preloader>
      `
}
}
  customElements.define('sign-in-page', SignInPage)






// import { Component, eventBus } from "../../../core";
// import "../../molecules";
// import "../../atoms";
// import { initialFieldsState } from "./initialState";
// import { FormManager } from "../../../core/FormManager/FormManager";
// import { Validator } from "../../../core/FormManager/Validator";
// import { authService } from "../../../services/Auth";
// import { appRoutes } from "../../../constants/appRoutes";
// import { appEvents } from "../../../constants/appEvents";
// // import './SignInPage.scss'


// export class SignInPage extends Component {
//     constructor() {
//       super();
//       this.state = {
//         error: "",
//         isLoading: false,
//         fields: {
//           ...initialFieldsState,
//         },
//       };

//       this.form = new FormManager();
//     }

//     toggleIsLoading = () => {
//       this.setState((state) => {
//         return {
//           ...state,
//           isLoading: !state.isLoading,
//         };
//       });
//     };

//     SignIn = (data) => {
//       this.toggleIsLoading();
//       authService
//         .SignIn(data.email, data.password)
//         .then((user) => {
//           authService.user = user;
//           eventBus.emit(appEvents.changeRoute, { target: appRoutes.home });
//           eventBus.emit(appEvents.userAuthorized);
//         })
//         .catch((error) => {
//           this.setState((state) => {
//             return {
//               ...state,
//               error: error.message,
//             };
//           });
//         })
//         .finally(() => {
//           this.toggleIsLoading();
//         });
//     };

//     validateForm = (evt) => {
//       if (evt.target.closest("motorcycle-input")) {
//         this.form.init(this.querySelector(".registration-form"), {
//           email: [
//             Validator.email("Email is not valid"),
//             Validator.required("The field should not be empty"),
//           ],
//           password: [Validator.required("The field should not be empty")],
//         });
//       }
//     };

//     validate = (evt) => {
//       this.setState((state) => {
//         return {
//           ...state,
//           fields: {
//             ...state.fields,
//             ...evt.detail,
//           },
//         };
//       });
//     };

//     componentDidMount() {
//       eventBus.on(appEvents.validateControls, this.validate);
//       this.addEventListener("click", this.validateForm);
//       this.addEventListener("submit", this.form.handleSubmit(this.SignIn));
//     }
    

//   render() {
//     const {
//       fields: { email, password },
//     } = this.state;
//     return `
//     <motorcycle-preloader is-loading="${this.state.isLoading}">
//         <div class="mt-3">
//           <h1>Sign In</h1>
//         </div>
//         <form class="mt-5 registration-form">
//           <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
//           <motorcycle-input
//             type="email"
//             label="Email"
//             control-name="email"
//             value="${email.value}"
//             is-valid="${email.isValid}"
//             is-touched="${email.isTouched}"
//             error-message="${email.errors?.message}"
//           ></motorcycle-input>

//           <motorcycle-input
//             type="password" 
//             label="Password"
//             control-name="password"
//             class-name="first-pass"
//             value="${password.value}"
//             is-valid="${password.isValid}"
//             is-touched="${password.isTouched}"
//             error-message="${password.errors?.message}"
//           ></motorcycle-input>
//           <button type="submit" class="btn btn-primary">Sign in</button>
//         </form>
//       </motorcycle-preloader>
//     `;
//   }
// }

// customElements.define("sign-in-page", SignInPage);
 