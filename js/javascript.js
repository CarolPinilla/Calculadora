
function mostrar(n){
    var x = document.getElementById("mostrar").value;
    numeros.num2 = document.getElementById("mostrar").value = x + n;
    console.log(num2);

}



function borrar(){
    document.getElementById("mostrar").value = "";
}




/**Funcion de sumar */
/*function Sumar() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var res;
    if (num1 == "") {
        alert("Ingrese el numero en la casilla numero 1");

    } else if (num2 == "") {
        alert("Ingrese el numero en la casilla numero 2");
    } else {
        res = (parseInt(num1) + parseInt(num2));
        alert(res);
    }


}
/** FUncion de Restar */

/*function Restar() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var res;
    if (num1 == "") {
        alert("Ingrese el numero en la casilla numero 1");

    } else if (num2 == "") {
        alert("Ingrese el numero en la casilla numero 2");
    } else {
        res = (num1 - num2);
        alert(res);
    }
}

/**Funcion para multiplicar */
/*function Multiplicar() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var res;
    if (num1 == "") {
        alert("Ingrese el numero en la casilla numero 1");

    } else if (num2 == "") {
        alert("Ingrese el numero en la casilla numero 2");
    } else {
        res = (num1 * num2);
        alert(res);
    }
}

/**Funcion para dividir */

/*function Dividir() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var res;
    if (num1 == "") {
        alert("Ingrese el numero en la casilla numero 1");
    } else if (num2 == 0) {
        alert("Error matematico no puede dividir por 0");
    } else {
        res = (num1 / num2);
        alert(res);
    }
}


*/