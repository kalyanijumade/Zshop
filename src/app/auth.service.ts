import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from '../../node_modules/rxjs/Observable';
import { ActivatedRoute, Router } from '../../node_modules/@angular/router';


@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth : AngularFireAuth, private state : ActivatedRoute, private route : Router)  { 
    this.user$ = afAuth.authState;
  }


  logout(){
    this.afAuth.auth.signOut();
  }

  login(){
    let returnUrl = this.state.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    
  }

}
