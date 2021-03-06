import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MainpagePage } from '../mainpage/mainpage';

/**
 * Generated class for the CursosEstudiantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursos-estudiante',
  templateUrl: 'cursos-estudiante.html',
})
export class CursosEstudiantePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosEstudiantePage');
  }

  navegarAMainPage() {
    this.navCtrl.push(MainpagePage); 
  }

}
