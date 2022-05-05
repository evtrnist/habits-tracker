import { Injectable } from '@angular/core';

import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root',
})
export class AuthApi {
    constructor(
        private angularFirestore: AngularFirestore,
        private angularFireAuth: AngularFireAuth
    ) {}

    signIn(email: string, password: string) {
        this.angularFireAuth.signInWithEmailAndPassword(email, password);
    }

    signUp(email: string, password: string) {
        // TO DO: send verification email
        this.angularFireAuth.createUserWithEmailAndPassword(email, password);
    }

    signOut() {
        this.angularFireAuth.signOut();
    }
}
