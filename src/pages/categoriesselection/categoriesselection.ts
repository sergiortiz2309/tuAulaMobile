import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MainpagePage } from '../mainpage/mainpage';

/**
 * Generated class for the CategoriesselectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoriesselection',
  templateUrl: 'categoriesselection.html',
})
export class CategoriesselectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesselectionPage');
  }

  navegarAMainpage() {
    this.navCtrl.push(MainpagePage); 
  }

}
