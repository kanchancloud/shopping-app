import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDJOHMRvvHePZ_GQLr_h4l5GPkcZBeXBzM",
    authDomain: "my-app-c297b.firebaseapp.com",
    projectId: "my-app-c297b",
    storageBucket: "my-app-c297b.appspot.com",
    messagingSenderId: "555959081324",
    appId: "1:555959081324:web:8ad78d608841b4765c3b49"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

