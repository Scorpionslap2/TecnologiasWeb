import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngresarComponent } from './ingresar/ingresar.component'; 
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acerca de/acercade.component';

const routes: Routes = [
  { path: 'ingresar', component: IngresarComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acercade', component: AcercadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
