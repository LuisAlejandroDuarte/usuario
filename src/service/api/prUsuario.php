<?php
  set_time_limit(0);
  require_once("database.php");  
  $data= json_decode(file_get_contents("php://input"),TRUE); 

  $Accion = $data['accion'];  
    
    if ($Accion=="login")
    {
        $SQL="SELECT * FROM sgi_user  WHERE USE_USUA = '" . $data['use_usua'] . "' AND USE_CLAV='" . $data['use_clav'] . "'";

        $execute = new  DataBase();
        $result= $execute->executeSql($SQL);
        
        echo json_encode($result);      
    }
    
    if ($Accion=="listUsuario")
    {
        $SQL="SELECT * FROM sgi_user";

        $execute = new  DataBase();
        $result= $execute->executeSql($SQL);
        
        echo json_encode($result);      
    }

    if ($Accion=="getUsuario")
    {
        $SQL="SELECT * FROM sgi_user WHERE USE_CODI = " . $data['use_codi']; 

        $execute = new  DataBase();
        $result= $execute->executeSql($SQL);
        
        echo json_encode($result);      
    }

    if ($Accion=="ADD")
    {
        $SQL="INSERT INTO sgi_user (USE_IDEN,USE_NOMB,USE_APEL,USE_EMAI,USE_TELE,USE_USUA,USE_CLAV,USE_COD_TIPO,CVLAC)" .
            " VALUES ('" . $data['use_iden'] . "','" . $data['use_nomb'] . "','" . $data['use_apel'] . "'," .
            " '" . $data['use_emai'] . "','" . $data['use_tele'] . "','" . $data['use_usua'] . "',"  .
            " '" . $data['use_clav'] . "'," .  (int)$data['use_cod_tipo'] . ",'" . $data['use_cvlac'] . "')";

        $execute = new  DataBase();
        $result= $execute->escalarSql($SQL);
        
        echo $result;
    }
    

 ?>