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
          databaseService,create('motorcycle', {
              ...data,
              poster:url,
          })
        })
      }
      )
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
                  <input class="form-control" type="text" name="title">
                </div>
                <div class="mb-3">
                  <label class="form-label">Price</label>
                  <input class="form-control" type="text" name="title">
                </div>
                <div class="mb-3">
                <label class="form-label">Status</label>
                <select class="form-select" name="genre">
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
                  <select class="form-select" name="genre">
                    <option value="Stock">1</option>
                    <option value="Stock">2</option>
                    <option value="Stock">3</option>
                    <option value="Stock">4</option>
                    <option value="Stock">5</option>
                    <option value="Stock">6</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Color</label>
                  <select class="form-select" name="genre">
                    <option value="Color">Red</option>
                    <option value="Color">Green</option>
                    <option value="Color">Orange</option>
                    <option value="Color">Black</option>
                    <option value="Color">Blue</option>
                    <option value="Color">Silver</option>
                    <option value="Color">Italian</option>
                    <option value="Color">White</option>
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






// import { Component, eventBus } from "../../../core";
// import { authService } from "../../../services/Auth";
// import { appRoutes } from "../../../constants/appRoutes";
// import { appEvents } from "../../../constants/appEvents";
// import { FormManager } from "../../../core/FormManager/FormManager";
// import { storageService } from "../../../services/Storage";
// import { databaseService } from "../../../services/Database";


// export class AdminPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false,
//     };
//     this.form = new FormManager();
//   }

//   toggleIsLoading() {
//     this.setState((state) => {
//       return {
//         ...state,
//         isLoading: !state.isLoading,
//       };
//     });
//   }

//   createMovie = (data) => {
//     this.toggleIsLoading();
//     storageService
//       .uploadPoster(data.poster)
//       .then((snapshot) => {
//         storageService.getDownloadURL(snapshot.ref).then((url) => {
//           databaseService
//             .create("movies", {
//               ...data,
//               poster: url,
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         });
//       })
//       .finally(() => {
//         this.toggleIsLoading();
//       });
//   };

//   componentDidMount() {
//     this.form.init(this.querySelector(".send-data"), {});
//     this.addEventListener("submit", this.form.handleSubmit(this.createMovie));
//   }

//   render() {
//     return `
//     <motorcycle-preloader is-loading="${this.state.isLoading}">
//     <div class="container mt-5">
//       <h1>AdminPage</h1>
//       <div class="row">
//         <div class="col-12">
//           <form class="send-data">
//             <div class="mb-3">
//               <label class="form-label">Type movie name</label>
//               <input class="form-control" type="text" name="title">
//             </div>
//             <div class="mb-3">
//               <label class="form-label">Movie rating</label>
//               <input class="form-range" type="range" name="rating" min="0" max="5" step="0.5">
//             </div>
//             <div class="mb-3">
//               <label class="form-label">Upload a poster</label>
//               <input class="form-control" type="file" id="formFile" name="poster">
//             </div>
//             <div class="mb-3">
//               <label class="form-label">Chose a genre</label>
//               <select class="form-select" name="genre">
//               ${appGenres.map((item) => {
//                 return `<option value="${item.value}">${item.label}</option>`
//               }).join(' ')}
//               </select>
//             </div>
//             <div class="mb-3">
//               <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
//               <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//             </div>
//             <button type="submit" class="btn btn-primary">Send</button>
//           </form>
//         </div>
//       <div>
//     </div>
//     </motorcycle-preloader>
    
//     `;
//   }
// }

// customElements.define("admin-page", AdminPage);
