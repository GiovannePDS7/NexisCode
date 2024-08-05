import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { OndaComponent } from './components/onda/onda.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    PrincipalComponent,
    QuemSomosComponent,
    OndaComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
