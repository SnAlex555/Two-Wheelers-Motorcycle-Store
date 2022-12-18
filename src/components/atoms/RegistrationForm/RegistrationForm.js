import { Component } from "../../../core";
import './registrationForm.scss'

export class RegistrationForm extends Component {

    static get observedAttributes() {
        return ["type", "label", "control-name", "class-name", "value", "is-valid", "is-touched", "error-message",];
    }

    render() {

        const controlClassName = JSON.parse(this.props['is-valid']) ? 'is-valid' : 'is-invalid';
        const isAddClassName = JSON.parse(this.props['is-touched']) ? controlClassName : '';
        
        return `
                <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3">
                        </div>
                    </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3">
                            </div>
                        </div>

                    <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        `
    }
}

customElements.define('registration-form', RegistrationForm)