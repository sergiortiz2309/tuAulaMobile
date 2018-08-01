import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InscriptionPage } from '../pages/inscription/inscription';
import { CategoriesselectionPage } from '../pages/categoriesselection/categoriesselection';
import { MainpagePage } from '../pages/mainpage/mainpage';
import { CursosPage } from '../pages/cursos/cursos';
import { CursosEstudiantePage } from '../pages/cursos-estudiante/cursos-estudiante';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    InscriptionPage,
    CategoriesselectionPage,
    MainpagePage,
    CursosPage,
    CursosEstudiantePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InscriptionPage,
    CategoriesselectionPage, 
    MainpagePage, 
    CursosPage,
    CursosEstudiantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
