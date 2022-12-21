import { appRoutes } from '../../../constants/appRoutes'
import { Component, FormManager } from '../../../core'
import { databaseService } from '../../../services';
import { authService } from '../../../services/Auth'
import { storageService } from '../../../services/Storage';

export class AdminPage extends Component {

  constructor() {
    super();
    this.state = {
      isLoading:false,
      };
    this.form = new FormManager();
    } 

    toggleisLoading(){
    this.setState((state) => {
        return {
          ...state,
          isLoading: !state.isLoading,
         };
      })
   }

  createMotorcycle = (data) => {
    this.toggleisLoading();
    storageService.uploadPoster(data.poster)
      .then((snapshot) => {
        storageService.getDownloadURL(snapshot.ref).then((url) => {
          databaseService.create('motorcycle', {
              ...data,
              poster:url,
          })
          .catch((error) => {
            console.log(error)
                })
            })
        })
        .finally(() => {
        this.toggleisLoading()
        })
        }

  componentDidMount() {
    this.form.init(this.querySelector('.send-data'), {})
    this.addEventListener('submit', this.form.handleSubmit(this.createMotorcycle))
    if (!authService.user) {
      this.dispatch('change-route', 
      { target: appRoutes[this.props.path ?? 'signUp'] 
    });
  }
  }

  render() {
    return `
      <motorcycle-preloader is-loading="${this.state.isLoading}">
        <div class="container mt-5">
          <h1>AdminPage</h1>
          <div class="row">
            <div class="col-12">
              <form class="send-data">
                <div class="mb-3">
                  <label class="form-label">Model</label>
                  <input class="form-control" type="text" name="model">
                </div>
                <div class="mb-3">
                  <label class="form-label">Price</label>
                  <input class="form-control" type="text" name="price">
                </div>
                <div class="mb-3">
                <label class="form-label">Status</label>
                <select class="form-select" name="Status">
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Upload a poster</label>
                  <input class="form-control" type="file" id="formFile" name="poster">
                </div>
                <div class="mb-3">
                  <label class="form-label">Stock</label>
                  <select class="form-select" name="stock">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Color</label>
                  <select class="form-select" name="color">
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Orange">Orange</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Silver">Silver</option>
                    <option value="White">White</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
              </form>
            </div>
          <div>
        </div>
      </motorcycle-preloader>
    `;
  }
}

customElements.define('admin-page', AdminPage)





