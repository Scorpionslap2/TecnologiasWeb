import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngresarComponent } from './ingresar/ingresar.component'; 
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acerca de/acercade.component';
import { AgendarComponent } from './agendar/agendar.component';
import { UsuarioRComponent } from './usuarioRegistrado/usuarioR.component';
import { UsuarioAComponent } from './usuarioAdministrador/usuarioA.component';

const routes: Routes = [
  { path: 'ingresar', component: IngresarComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'agendar', component: AgendarComponent},
  { path: 'miagenda', component: UsuarioRComponent},
  { path: 'misreservas', component: UsuarioAComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
