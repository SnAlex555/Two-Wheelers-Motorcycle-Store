import { Component } from "../../../core"
import { databaseService } from "../../../services";
import '../../../components'
import './SearchResults.scss'

export class SearchResults extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            motorcycle: []
        }
    }

    toggleIsLoading() {
        this.setState((state) => {
          return {
            ...state,
            isLoading: !state.isLoading,
          };
        });
      }

    getMotorcycle() {
        databaseService
        .read('motorcycle')
        .then((data) => {
           this.setState((state) => {
            return {
                ...state,
                motorcycle:data,
            }
           })
        })
        .finally(() => {
            this.toggleIsLoading();
          });
    }

    componentDidMount() {
        this.getMotorcycle()
    }

    render(){
        return `
        ${
            !this.state.motorcycle
            ? `<motorcycle-preloader is-loading="${this.state.isLoading}"></motorcycle-preloader>`
            : `
            <div class="search__results">
                ${this.state.motorcycle.map(({ poster, model, status, price, stock, color, id }) =>  {
                    return `
                    <motorcycle-card-of-product
                    poster="${poster}"
                    model="${model}"
                    status="${status}"
                    price="${price}"
                    stock="${stock}"
                    color="${color}"
                    id="${id}"
                    ></motorcycle-card-of-product>
                    `;
                }
                ).join(' ')
            }  
            </div>
            `}
            `
    }
}

customElements.define('motorcycle-search-results', SearchResults)

