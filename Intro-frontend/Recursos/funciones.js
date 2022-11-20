//alert("Hola Mundo");
let colores =["blue", "white", "gray", "red", "purple","orange", "green", "black", "pink", "darkmagenta"]

function CambiarFondo(){
    let indice=parseInt(Math.random() * 10) - 1;
    let color = colores [indice];
    document.querySelector("body").style.background = color;
    let mensaje =document.querySelector("#textMensaje").value;
    document.querySelector("#miDivision").innerHTML=mensaje;
}  
setTimeout(() => {
    CambiarFondo()
}, 4000);