import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }


  save(user: firebase.User){
    this.db.object('/user' + user.uid).update({
          userName: user.displayName,
          email: user.email

    });

  }
}
