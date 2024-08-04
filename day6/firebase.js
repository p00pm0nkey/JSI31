// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq2MhFtTJYOKZ1ZdNUVMtYWTHkuB-suAY",
  authDomain: "jsi31-c981f.firebaseapp.com",
  databaseURL: "https://jsi31-c981f-default-rtdb.firebaseio.com",
  projectId: "jsi31-c981f",
  storageBucket: "jsi31-c981f.appspot.com",
  messagingSenderId: "334099308239",
  appId: "1:334099308239:web:bee29d19e84194df61e1ba",
  measurementId: "G-F2BDJQ4NF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)

let name = document.getElementById("name")
let age = document.getElementById("age")
let email = document.getElementById("email")
let add = document.getElementById("add")

add.addEventListener("click", function () {
    this.setAttribute(ref(database, "User/" + "user1"), {
        name: name.value,
        age: age.value,
        email: email.value
    }).then(() => {
        alert("Success!")
    })
})
