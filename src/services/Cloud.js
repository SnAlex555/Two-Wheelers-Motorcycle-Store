import { initializeApp } from 'firebase/app'

export class CloudService {
    constructor() {
        this.config = {
            apiKey:process.env.API_KEY,
            authDomain: "motorcycle-store.firebaseapp.com",
            projectId: "motorcycle-store",
            storageBucket: "motorcycle-store.appspot.com",
            messagingSenderId: "119538219150",
            appId: process.env.API_ID,
        }

     this.app = initializeApp(this.config);    
    }
}

export const cloudService = new CloudService()



