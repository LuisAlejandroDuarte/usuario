import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { ErrorEntidad } from 'src/entidad/error/entidad.error';



export class ErrorComponent extends Mensaje
{
    /**
     * GenerarMensaje
     */
    public GenerarMensaje(error:ErrorEntidad):Mensaje  {
        
        var mensaje= new Mensaje();
            mensaje.id=error.status;
            mensaje.titulo="Error";
            mensaje.cuerpo= error.message.substring(0,100);
            mensaje.tipo=TipoMensaje.Error;
            
        return mensaje;

    }
}