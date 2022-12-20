import { Component } from "../../../core"
import { databaseService } from '../../../services/Database'
import "../../organism"
import '../../../components'

export class HomePage extends Component {
    render() {
        return`
                <motorcycle-main-top-commercial></motorcycle-main-top-commercial>
                <motorcycle-summer-ride-commercial></motorcycle-summer-ride-commercial>
                <motorcycle-why-us></motorcycle-why-us>
                <motorcycle-services></motorcycle-services>
        `
    }
}

customElements.define('home-page', HomePage)