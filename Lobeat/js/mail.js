function send(){

    var radios = document.getElementsByName("subject");

    //Variables para revisar si se han metido valores en todos los campos
    var hay_motivo;
    if (radios[0].checked == false && radios[1].checked == false && radios[2].checked == false)
        hay_motivo = false;
    else
        hay_motivo = true;
    var hay_nombre = document.getElementsByName('nombre')[0].value;
    var hay_email = document.getElementsByName ('email')[0].value;
    var hay_consulta = document.getElementsByName('body')[0].value;

    if (!hay_nombre || !hay_email || !hay_motivo || !hay_consulta){
       window.alert("No se han introducido todos los campos");
    }
    else{

        //Guardamos en subject el valor del campo del checkbox que se ha marcado
        var subject = Array.from(radios).find(radio => radio.checked).value;

        if (document.getElementsByName('terms')[0].checked == false){
        window.alert("No se han aceptado los términos");
        }
        else{
            var name = document.getElementsByName('nombre')[0].value;
            var email = document.getElementsByName('email')[0].value;
            var text = document.getElementsByName('body')[0].value;

            window.location.href = "mailto:LoBeat@gmail.com?subject="+subject+"&body=Nombre: "+name+"%0ACorreo: "+email+"%0AConsulta: "+text;
        }
    }
}