import { Component, eventBus } from "../../../core"
import { Validator } from "../../../core"
import { FormManager } from "../../../core/FormManager/FormManager"
import { initialFieldsState } from "./InitialState"
import { authService } from '../../../services'
import { appRoutes } from "../../../constants/appRoutes"
import { appEvents } from "../../../constants/appEvents"
import "../../molecules"
import "../../atoms"
import "./SignUpPage.scss"

    export class SignUpPage extends Component {
        constructor() {
          super();
          this.state = {
            error: "",
            isLoading: false,
            fields: {
              ...initialFieldsState,
            },
          };
      
          this.form = new FormManager();
        }
      
        toggleIsLoading = () => {
          this.setState((state) => {
            return {
              ...state,
              isLoading: !state.isLoading,
            };
          });
        };
      
        registerUser = (data) => {
          this.toggleIsLoading();
          authService
            .signUp(data.email, data.password)
            .then((user) => {
              authService.user = user;
              eventBus.emit(appEvents.changeRoute, { target: appRoutes.home });
              eventBus.emit(appEvents.userAuthorized);
            })
            .catch((error) => {
              this.setState((state) => {
                return {
                  ...state,
                  error: error.message,
                };
              });
            })
            .finally(() => {
              this.toggleIsLoading();
            });
        };
      
        validateForm = (evt) => {
          if (evt.target.closest("it-input")) {
            this.form.init(this.querySelector(".registration-form"), {
              email: [
                Validator.email("Email is not valid"),
                Validator.required("The field should not be empty"),
              ],
              password: [Validator.required("The field should not be empty")],
            });
          }
        };
      
        validate = (evt) => {
          this.setState((state) => {
            return {
              ...state,
              fields: {
                ...state.fields,
                ...evt.detail,
              },
            };
          });
        };
      
        componentDidMount() {
          this.addEventListener("click", this.validateForm);
          this.addEventListener("submit", this.form.handleSubmit(this.registerUser));
          eventBus.on(appEvents.validateControls, this.validate);
        }
      
        render() {
          const {
            fields: { email, password },
          } = this.state;
      
        return `
            <section class="sign__up-form"
                <motorcycle-preloader is loading="${this.state.isLoading}">
                    <form class="mt-5">
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
                            label="password"
                            control-name="password"
                            value="${password.value}" 
                            is-valid="${password.isValid}"
                            is-touched="${password.isTouched}"
                            error-message="${password.errors?.message}"
                        ></motorcycle-input>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
            </section>    
        `;
        }
      }
      
      customElements.define("sign-up-page", SignUpPage);
      