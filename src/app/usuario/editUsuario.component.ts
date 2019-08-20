import { Component, ViewChild } from '@angular/core';

import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { AlertaComponent } from '../alerta/alerta';
import { ErrorComponent } from '../error/error';
import { UsuarioService } from 'src/service/usuario/serviceUsuario';
import { Router, ActivatedRoute } from '@angular/router';
declare const $: any;

export class item
{
  CODI:number;
  NOMB:string;
}

@Component({
  selector: 'app-editusuario',
  templateUrl: './editUsuario.component.html',
  styleUrls: ['./editUsuario.component.scss']
})

export class EditUsuarioComponent {

  dtOptions: DataTables.Settings = {};
  @ViewChild(AlertaComponent,null) alerta: AlertaComponent;

  mensaje:Mensaje;  
  selTipoUsuario:number;

  use_nomb:string;
  use_apel:string;
  use_iden:string;
  use_emai:string;
  use_tele:string;
  use_usua:string;
  use_codi:number;
  listTipoUsuario:item[];
  fechaNacimiento :{};
  
  constructor(private serviceUsuario:UsuarioService,
    private route:Router,private activeRoute:ActivatedRoute ){}
  
    public ngOnInit() {   
      this.use_codi =parseInt(this.activeRoute.snapshot.paramMap.get('id'));   
      this.limpiarFormulario();
      let usuario = new Usuario();
        usuario.accion="getUsuario";        
        $('#iconoEspera').show();
        this.listTipoUsuario = [];
        let item = {
          CODI:0,
          NOMB:'Administrador'
        };
        this.listTipoUsuario.push(item);
        item ={
          CODI:1,
          NOMB:'Usuario'
        };
        this.listTipoUsuario.push(item);
        item ={
          CODI:2,
          NOMB:'Juez'
        };
      this.listTipoUsuario.push(item);
      $('#iconoEspera').hide(); 
      this.limpiarFormulario();     
      if (this.use_codi!=0)  
      {
        $('#iconoEspera').show();   
        usuario.use_codi=this.use_codi;   
        this.serviceUsuario.getUsuario(usuario).subscribe(res=>{
        if (res[0]!=null)
        {
            this.use_iden = res[0].USE_IDEN;
            this.use_nomb = res[0].USE_NOMB;
            this.use_apel = res[0].USE_APEL;
            this.use_emai = res[0].USE_EMAI;
            this.use_tele = res[0].USE_TELE;
            this.use_usua = res[0].USE_USUA;
            this.selTipoUsuario = res[0].USE_COD_TIPO;
            $('#iconoEspera').hide();      
        }      
       });      
     }     
  }
    
    limpiarFormulario()
    {
      this.selTipoUsuario =-1;
      this.use_nomb="";
      this.use_apel="";
      this.use_iden="";
      this.use_emai="";
      this.use_tele="";
      this.use_usua="";
    }
    
    onSalir()
    {
      this.route.navigate(["/usuario"]); 
    }

    onClicBoton1(event){  
      if (event.nVentana=="IdError")
              $('#IdError').hide();
  
    }

    onGuardar()
    {
      let usuariio = new Usuario();
        usuariio.use_iden = this.use_iden;
        usuariio.use_nomb = this.use_nomb;
        usuariio.use_apel = this.use_apel;
        usuariio.use_emai = this.use_emai;
        usuariio.use_tele = this.use_tele;
        usuariio.use_usua = this.use_usua;
        
        usuariio.use_clav = new Md5().appendStr(this.use_usua).end().toString();
        usuariio.use_cod_tipo = this.selTipoUsuario;
        usuariio.accion="ADD";
        usuariio.use_cvlac="";
        this.serviceUsuario.setUsuario(usuariio).subscribe(res=>{

        },error=> {
              $('#iconoEspera').hide();
              console.clear();
              var errorComponent = new ErrorComponent();            
              this.mensaje =errorComponent.GenerarMensaje(error);          
              this.mensaje.nVentana="IdError";
              this.alerta.onChangedMyId("IdError");                      
              $('#IdError').show();  
        });
    }
}

