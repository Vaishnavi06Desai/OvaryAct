import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth, private db: AngularFirestore) { }

  getUserState() {
    return this.af.authState;
  }

  login(user){
    return this.af.signInWithEmailAndPassword(user.email, user.password);
  }

  signup(user){
    return new Promise((resolve, reject) => {
      this.af.signInWithEmailAndPassword(user.email, user.password).then(
        usercred => {

        }
      );
    }) 
  }

  insertuserdata(user, usercred){
    return this.db.doc(`Users/${usercred.user.uid}`).set({
      email: user.email,
      name: user.name,
      phone: user.phone,
      role: user.role,
      })
  }
}

