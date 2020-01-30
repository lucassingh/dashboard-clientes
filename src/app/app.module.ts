//default angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { EstadisticaClientesComponent } from './components/estadistica-clientes/estadistica-clientes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//forms
import {FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

//firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListaClientesComponent,
    EstadisticaClientesComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

