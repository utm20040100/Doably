import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Maestro } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Clases, Calificacion } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<User>;
  public master$: Observable<Maestro>;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
    this.master$ = this.afAuth.authState.pipe(
      switchMap((master) => {
        if (master){
          return this.afs.doc<Maestro>(`maestros${master.uid}`).valueChanges();}

          return of(null);
      })
    );
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }


  async register(email: string, password: string,): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerifcationEmail();
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateMaestroData(user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }
  private updateMaestroData(master:Maestro) {
    const userRef: AngularFirestoreDocument<Maestro> = this.afs.doc(`maestros/${master.uid}`);

    const data: Maestro = {
      uid: master.uid,
      email: master.email,
      emailVerified: master.emailVerified,
      displayName: master.displayName,
    };

    return userRef.set(data, { merge: true });
  }

  async sendVerifcationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  isEmailVerified(user: User) {
    return user.emailVerified === true ? true : false;
  }
  
  async sendVerifcationClass(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private updateUserData(user:User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  }
}
