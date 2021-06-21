
function load(){

    document.getElementById("btnEnviar").addEventListener("click", click)
}


function click(event){

    enviarMensajeAlServidor("/serv/index.php", retornoDelClick)
    alert("Llamada realizada");
}


function retornoDelClick(respuesta){
    alert(respuesta);
    $("nombre").value = respuesta;
}


function enviarMensajeAlServidor(servidor, funcionARealizar){

    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();

    //indico hacia donde va el mensaje
    xmlhttp.open("GET", servidor, true);

    //seteo el evento
    xmlhttp.onreadystatechange = function(){
        //veo si llego la respuesta al servidor
        if(xmlhttp.readyState == XMLHttpRequest.DONE){
            //reviso si la respuesta es correcta
            if(xmlhttp.status == 200){
                console.log(xmlhttp.response);
                funcionARealizar(xmlhttp.responseText);
            }else{
                alert("Ocurrió un error");
            }
        }
    }
    //envio del mensaje
    xmlhttp.send();
}