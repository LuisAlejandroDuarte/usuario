import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { environment } from 'src/environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class UsuarioService {
    baseUrl =environment.apiUrl;
    constructor(
        public http: HttpClient
    ){}

    getLogin(usuario:Usuario) : Observable<Usuario>{
                   
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Usuario>(this.baseUrl + 'prUsuario.php',JSON.stringify(usuario), {headers});
    }

    getListUsuario (usuario:Usuario):Observable<Usuario[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Usuario[]>(this.baseUrl + 'prUsuario.php',JSON.stringify(usuario), {headers});
    }

    getUsuario(usuario:Usuario) : Observable<Usuario>{                   
       return this.http.post<Usuario>(this.baseUrl + 'prUsuario.php',JSON.stringify(usuario), httpOptions);
     }  
     
     setUsuario(usuario:Usuario) : Observable<Usuario>{                   
      return this.http.post<Usuario>(this.baseUrl + 'prUsuario.php',JSON.stringify(usuario), httpOptions);
    }  
}