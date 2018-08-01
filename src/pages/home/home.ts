import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { InscriptionPage } from '../inscription/inscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navegarALogin() {
    this.navCtrl.push(LoginPage); 
  }

  navegarAInscription() {
    this.navCtrl.push(InscriptionPage); 
  }

}
