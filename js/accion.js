var juegosStr = '[{"Nombre":"Vampyr", "Genero":"Acción", "Descripcion":"Vampyr es una aventura de rol y acción de los creadores de Remember Me y Life is Strange, en la que encarnamos a un vampiro dividido por su origen. Por un lado la faceta vampírica de Jonathan E. Reid le empuja a asesinar, mientras que la humana, la de un doctor, le incita a ayudar a sus víctimas.", "Valoración":"75", "Precio":"USD50", "Trailer":"https://www.youtube.com/watch?v=QDd8TJwVZ0s"}]';
var juegos = JSON.parse(juegosStr);

document.addEventListener("DOMContentLoaded", function(){
    var titulo = document.getElementById("juego-nombre");
    titulo.innerHTML = juegos[0].Nombre;

    var genero = document.getElementById("juego-genero");
    genero.innerHTML= juegos[0].Genero;

    var descripcion = document.getElementById("juego-descripcion");
    descripcion.innerHTML = juegos[0].Descripcion;

    var valorac = document.getElementById("juego-valoracion");
    valorac.setAttribute("value", juegos[0].Valoración);

    var precio = document.getElementById("juego-precio");
    precio.innerHTML = juegos[0].Precio;

    var trailer = document.getElementById("juego-trailer");
    trailer.setAttribute("href", juegos[0].Trailer);

})

