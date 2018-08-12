import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainpagePage } from '../mainpage/mainpage';
import { InglesbPage } from '../inglesb/inglesb';

/**
 * Generated class for the CursosinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursosins',
  templateUrl: 'cursosins.html',
})
export class CursosinsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosinsPage');
  }

  navegarAMainPage() {
    this.navCtrl.push(MainpagePage); 
  }

  navegarAInglesb() {
    this.navCtrl.push(InglesbPage); 
  }

}
