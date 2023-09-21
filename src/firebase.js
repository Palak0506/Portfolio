import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD3pvf0XDFyvR4TldtJX8uzGO9MN0ti5ek",
    authDomain: "portfolio-website-38198.firebaseapp.com",
    projectId: "portfolio-website-38198",
    storageBucket: "portfolio-website-38198.appspot.com",
    messagingSenderId: "933738858908",
    appId: "1:933738858908:web:da2f116cb737188963e059"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;