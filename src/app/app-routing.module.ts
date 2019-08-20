import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from 'src/service/usuario/serviceUsuario';
import { EditUsuarioComponent } from './usuario/editUsuario.component';
export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent    
  },
  {
    path: 'usuario',
    component: UsuarioComponent 
  },{
    path: 'editusuario/:id',  
    component: EditUsuarioComponent 
  }]

@NgModule({  
  imports:[RouterModule.forRoot(AppRoutes,{ useHash: true })],
  exports: [RouterModule],
  providers:[UsuarioService]
})
export class AppRoutingModule { }
