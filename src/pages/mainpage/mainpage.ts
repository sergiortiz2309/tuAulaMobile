import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursosPage } from '../cursos/cursos';
import { CursosEstudiantePage } from '../cursos-estudiante/cursos-estudiante';
import { CursosinsPage } from '../cursosins/cursosins';

/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainpagePage {

  user = "clases";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainpagePage');
  }

  navegarACursosEstudianteInscrito() {
    this.navCtrl.push(CursosinsPage); 
  }
 
  navegarACursosEstudiante() {
    this.navCtrl.push(CursosEstudiantePage); 
  }

}
