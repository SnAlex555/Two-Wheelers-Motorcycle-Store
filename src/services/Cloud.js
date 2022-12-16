import { initializeApp } from 'firebase/app'

export class CloudService {
    constructor() {
        this.config = {
            apiKey: process.env.API_KEY,
            authDomain: "two-wheelers-motorcycle-store.firebaseapp.com",
            projectId: "two-wheelers-motorcycle-store",
            storageBucket: "two-wheelers-motorcycle-store.appspot.com",
            messagingSenderId: "199206463729",
            appId: process.env.APP_ID,
        }

        this.app = initializeApp(this.config)
    }

}

export const cloudService = new CloudService()