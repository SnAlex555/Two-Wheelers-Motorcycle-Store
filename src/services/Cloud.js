import { initializeApp } from 'firebase/app'

export class CloudService {
    constructor() {
        this.config = {
            apiKey:process.env.API_KEY,
            authDomain: "two-wheelers-motorcycle-47d24.firebaseapp.com",
            projectId: "two-wheelers-motorcycle-47d24",
            storageBucket: "two-wheelers-motorcycle-47d24.appspot.com",
            messagingSenderId: "1038731339361",
            appId: process.env.API_ID,
            measurementId: "G-MTRWBM25XH"  
        }

     this.app = initializeApp(this.config);    
    }
}

export const cloudService = new CloudService()




// import { initializeApp } from 'firebase/app'

// export class CloudService {
//     constructor() {
//         this.config = {
//             apiKey: process.env.API_KEY,
//             authDomain: "two-wheelers-motorcycle-store.firebaseapp.com",
//             projectId: "two-wheelers-motorcycle-store",
//             storageBucket: "two-wheelers-motorcycle-store.appspot.com",
//             messagingSenderId: "199206463729",
//             appId: process.env.API_ID,
//         }

//         this.app = initializeApp(this.config)
//     }

// }

// export const cloudService = new CloudService()