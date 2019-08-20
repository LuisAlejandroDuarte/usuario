import { Component, ViewChild } from '@angular/core';

import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { AlertaComponent } from '../alerta/alerta';
import { ErrorComponent } from '../error/error';
import { UsuarioService } from 'src/service/usuario/serviceUsuario';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent {

  dtOptions: DataTables.Settings = {};
  @ViewChild(AlertaComponent,null) alerta: AlertaComponent;
  faEdit =faEdit;
  mensaje:Mensaje;  
  fechaNacimiento :{};
  
  constructor(private serviceUsuario:UsuarioService,
    private router: Router ){}
  
    public ngOnInit() {     
      $('#iconoEspera').show(); 
      let usuario = new Usuario();
        usuario.accion="listUsuario";
      this.serviceUsuario.getListUsuario(usuario).subscribe(res=>{
        $('#iconoEspera').hide(); 
        $('#tablaUsuario').DataTable( {          
          data: res,
          columns: [              
              { title: "Identificación",data:"USE_IDEN" },
              { title: "Nombre",data:"USE_NOMB" },
              { title: "Apellido",data:"USE_APEL" }              
          ],
          "columnDefs": [ {
            "targets": 3,            
            "render": ( data, type, row, meta ) => {
              return '<i title="Ver Usuario" style="color:blue;cursor:pointer" class="fas fa-edit" aria-hidden="true" data-id=' + row.USE_CODI + '></i>';
            }
          } ]
        });
        $('#tablaUsuario tbody').on('click', 'tr', event => {
          var id = parseInt(event.currentTarget.cells[3].children[0].dataset.id);
          this.router.navigate(["/editusuario/"+ id ]);            

        });
      })      
    }
    
    
    onClickNuevo()
    {
      this.router.navigate(["/editusuario/0"]);            
    }

    onClicBoton1(event){  
      if (event.nVentana=="IdError")
              $('#IdError').hide();
  
    }

    onGuardar()
    {
    
    }

}

