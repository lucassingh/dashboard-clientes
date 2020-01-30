import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EstadisticaClientesComponent } from './components/estadistica-clientes/estadistica-clientes.component';


const APP_ROUTES: Routes = [
     { path: 'home', component: HomeComponent},
     { path: 'ingreso', component: ClienteComponent },
     { path: 'estadistica', component: EstadisticaClientesComponent },
     { path: '**',  pathMatch: 'full', redirectTo: 'home' },

];

export const app_routing = RouterModule.forRoot(APP_ROUTES)
