import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { AppRoutingModule, AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedAlerta } from './alerta/alerta.module';
import { UsuarioComponent } from './usuario/usuario.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import localeEs from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DataTablesModule } from 'angular-datatables';
import { EditUsuarioComponent } from './usuario/editUsuario.component';
registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [
    AppComponent, LoginComponent,
    UsuarioComponent,EditUsuarioComponent
  ],
  imports: [    
    BrowserModule,FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedAlerta,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    DataTablesModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



