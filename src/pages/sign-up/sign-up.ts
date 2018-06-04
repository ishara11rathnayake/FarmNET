import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from '../../models/account.interface';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  account = {} as Account;

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  register(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    }
    )
  }

}
