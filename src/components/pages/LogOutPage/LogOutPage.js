import { Component, Validator } from "../../../core";
import { FormManager } from "../../../core/FormManager/FormManager";
import { initialFieldsState } from "./InitialState";
import { authService } from '../../../services'

export class LogOutPage extends Component {

    constructor() {
        super()
        this.state = {
            error: '',
            isLoading: false,
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

    registerUser = (data) => {
        this.toggleisLoading()
        authService.signUp(data.email, data.password)
            .then((user) => {
                console.log(user)
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
        if (evt.target.closest('registration-form')) {
            this.form.init(this.querySelector('.registration'), {
                email: [
                    Validator.email('Email is not valid'),
                    Validator.required('The field should not be empty')
                ],
                password: [
                    Validator.required('The field should not be empty')
                ],
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
                },
            };
        });
    };

    componentDidMount() {
        this.addEventListener('submit', this.form.handleSubmit(this.registerUser));
        this.addEventListener('click', this.validateForm);
        this.addEventListener('validate-controls', this.validate);
    }


    render() {

        const { fields: { email, password } } = this.state;
        return `
        
        `
    }
}

customElements.define('log-out-page', LogOutPage)