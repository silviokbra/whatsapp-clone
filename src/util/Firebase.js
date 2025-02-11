import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export class Firebase {
    constructor() {


        this._config = {
            apiKey: "AIzaSyDq7omIfs5LYrtRWesQLJ7aO3gUmYxOW2k",
            authDomain: "whatsapp-clone-808d8.firebaseapp.com",
            projectId: "whatsapp-clone-808d8",
            storageBucket: "gs://whatsapp-clone-808d8.firebasestorage.app",
            messagingSenderId: "254439604655",
            appId: "1:254439604655:web:20ae2ada812d1845ff6f5a",
            measurementId: "G-PHR5R86SVJ"
        };
        this.init();
    }

    init() {

        if (!window._initializedFirebase) {

            firebase.initializeApp(this._config);
            firebase.firestore().settings({
                timestampsInSnapshots: true
            });
            window._initializedFirebase = true;
        }
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth() {

        return new Promise((s, f) => {
            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function (result) {

                var token = result.credential.accessToken;

                var user = result.user;

                s({
                    user,
                    token
                });

            }).catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;

                f(error);

            });

        });

    }

}