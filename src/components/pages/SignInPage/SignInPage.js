import { Component, FormManager } from "../../../core"
import "../../molecules"
import "../../atoms"
import { appRoutes } from "../../../constants/appRoutes"
import { appEvents } from "../../../constants/appEvents"
import { Validator } from "../../../core"
import { initialFieldsState } from "./InitialState";
import  { authService } from "../../../services"
import { eventBus } from "../../../core"

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

  toggleIsLoading = () => {
    this.setState((state) => {
        return {
            ...state,
            isLoading: !state.isLoading
        }
    })
  }

  signIn = (data) => {
    this.toggleIsLoading()
    authService
        .signIn(data.email, data.password)
        .then((user) => {
            authService.user = user;
          eventBus.emit(appEvents.changeRoute, { target: appRoutes.home });
          eventBus.emit(appEvents.userAuthorized);
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
      eventBus.on(appEvents.validateControls, this.validate);
      this.addEventListener("click", this.validateForm);
      this.addEventListener("submit", this.form.handleSubmit(this.signIn));
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





