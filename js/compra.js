document.addEventListener("DOMContentLoaded", function(){
    var precio = 50;
    var campoC = document.getElementById("cantidad");
    var digital = document.getElementById("digital")
    var CD = document.getElementById("CD");
    var campoE = document.getElementById("envio")
    var impuesto = document.getElementById("imp")
    var subtotal = document.getElementById("subtotal");
    var total = document.getElementById("total")
    var pagar;
    var cimp;
    


    campoC.addEventListener("change", function() {
        var cantidad = parseInt(campoC.value);
        pagar = cantidad * precio;
        subtotal.innerHTML = "$" + pagar;

        cimp = pagar * 1.22;
        impuesto.innerHTML = "$" + cimp;

    });

    
    
    digital.addEventListener("change", function (){
        if (digital.checked) {
            document.getElementById("direccion").style.display = "none";
            document.getElementById("envio").style.display = "none";
            total.innerHTML = "$" + cimp;


        }
    })

    CD.addEventListener("change", function(){
        if (CD.checked) {
            document.getElementById("direccion").style.display = "block";
            document.getElementById("envio").style.display = "block" ;

        }
    })

    campoE.addEventListener("change", function (){
        var envio = campoE.value;
        var cenv;
        if (envio=="normal"){
            cenv = cimp * 1.005;
            total.innerHTML = "$" + cenv;
        }

        else if (envio== "especial"){
            cenv = cimp * 1.02;
            total.innerHTML = "$" + cenv;
        }

        else if (envio== "premium") {
            cenv = cimp * 1.05;
            total.innerHTML = "$" + cenv;
        }

    });

    function myFunction() {
        var x = document.getElementById("reset").value;
        document.getElementById("").innerHTML = "x";
    }

    var cancelar = document.getElementById("reset");

    cancelar.addEventListener("click", function (){
        subtotal.innerHTML= "";
        impuesto.innerHTML="";
        total.innerHTML="";

    });






});