import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages

import { EmpresaComponent } from './pages/empresa/empresa.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/empresa', pathMatch: 'full' },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/empresa', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
