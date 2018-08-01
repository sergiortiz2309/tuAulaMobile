import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursosEstudiantePage } from './cursos-estudiante';

@NgModule({
  declarations: [
    CursosEstudiantePage,
  ],
  imports: [
    IonicPageModule.forChild(CursosEstudiantePage),
  ],
})
export class CursosEstudiantePageModule {}
