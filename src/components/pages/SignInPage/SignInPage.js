import { Component, eventBus } from "../../../core";
import "../../molecules";
import "../../atoms";
import { initialFieldsState } from "./initialState";
import { FormManager } from "../../../core/FormManager/FormManager";
import { Validator } from "../../../core/FormManager/Validator";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
import { appEvents } from "../../../constants/appEvents";
import './SignInPage.scss'


export class SignInPage extends Component {
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

    SignIn = (data) => {
      this.toggleIsLoading();
      authService
        .SignIn(data.email, data.password)
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
      if (evt.target.closest("motorcycle-input")) {
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
      eventBus.on(appEvents.validateControls, this.validate);
      this.addEventListener("click", this.validateForm);
      this.addEventListener("submit", this.form.handleSubmit(this.SignIn));
    }
    

  render() {
    const {
      fields: { email, password },
    } = this.state;
    return `
      
      
    `;
  }
}

customElements.define("sign-in-page", SignInPage);
 