function send(){
    var name = document.getElementsByName('nombre2')[0].value;
    var text = document.getElementsByName('body')[0].value;
    var body = text + "\n" + name;

    //He cogido como asunto del correo el tipo de mensaje
    var radios = document.getElementsByName("subject");
    var subject = Array.from(radios).find(radio => radio.checked).value;

    window.location.href = "mailto:LoBeat@gmail.com?subject="+subject+"&body="+body;
}