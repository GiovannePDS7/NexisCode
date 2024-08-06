import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { OndaComponent } from './components/onda/onda.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { FooterComponent } from './components/footer/footer.component';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    PrincipalComponent,
    QuemSomosComponent,
    OndaComponent,
    IntegrantesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
