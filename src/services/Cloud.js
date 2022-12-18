import { initializeApp } from 'firebase/app'

export class CloudService {
    constructor() {
        this.config = {
            apiKey: "AIzaSyB9VDusoEqrfmrcxJzo66-p-hSAjxnDfNA",
            authDomain: "two-wheelers-motorcycle-store.firebaseapp.com",
            projectId: "two-wheelers-motorcycle-store",
            storageBucket: "two-wheelers-motorcycle-store.appspot.com",
            messagingSenderId: "199206463729",
            appId: "1:199206463729:web:82aa1361ebd0bd623aa150",
        }

        this.app = initializeApp(this.config)
    }

}

export const cloudService = new CloudService()