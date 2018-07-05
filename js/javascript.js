//declaracion de variables
var p = 0;
var ini = 0;
var nume1;

// Funcion general que recibe los parametros enviados desde el html
function recibir(n) {

    var x = document.getElementById("mostrar").value;

    //Darle valor cuando este en blanco y le opriman cero
    if (ini == 0 && n == ".") {
        nume1 = document.getElementById("mostrar").value = "0.";
        p = 1;
    } else if (n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7 || n == 8 || n == 9 || n == 0 || n == ".")
        if (p == 0 && n == ".") { //Validacion cuando es el primer punto que ingresa
            p = 1;
            nume1 = document.getElementById("mostrar").value = x + n;

        }
        else if (p == 1 && n == ".") { //validacion si ya se ha ingresado algun punto
            nume1 = document.getElementById("mostrar").value = x;

        } else {//sino se ingresa ningun punto
            nume1 = document.getElementById("mostrar").value = x + n;
        }
    ini = 1;


    if (n == "op") {
        this.operacion(nume1);
        document.getElementById("mostrar").value = "";
        nume1="";
        ini = 0;
        p = 0;
        
    }


}

function operacion(element) {
    console.log(element);
}

