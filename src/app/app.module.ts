import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarCursosComponent } from './components/cursos/listar-cursos/listar-cursos.component';

import { LOCALE_ID } from '@angular/core'
import  localePt from  '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { ListarCursos2Component } from './components/cursos/listar-cursos2/listar-cursos2.component'

registerLocaleData(localePt)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListarCursosComponent,
    ListarCursos2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
