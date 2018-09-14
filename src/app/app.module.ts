import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service.';

//AngularFirebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyCLe-2X62N9QhgRNkUl3jvX4zPAsNVBHH8",
  authDomain: "platzizquare-1535134654309.firebaseapp.com",
  databaseURL: "https://platzizquare-1535134654309.firebaseio.com",
  storageBucket: "platzizquare-1535134654309.appspot.com",
  messagingSenderId: "708764274397"
};


const appRoutes: Routes =[
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear/:id', component: CrearComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlp57D3BoGIzudiNNfvvbWT1IXWtETg14'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule

  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
