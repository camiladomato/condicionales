console.log("Holaaa");


//suma

let x = 10;
//let suma = x + 3;
x += 3;
console.log(x);

let nombre = "camila";
let apellido = "domato";

let nombreCompleto = nombre + " "+ apellido;

console.log(nombreCompleto); 


//condicionales
//if , if else , else if ,switch

//if

//if(condicion){
  //  sentencia --> accion a ejecutar
//}

if(20>10){
    console.log("Es mayor el numero que esta primero")
} 

let edad = 28;

if (edad <30){
    console.log("eres menor a 30")
}

let edad2 = 35;

if (edad2 < 35){
    console.log("eres menor a 35")
}

//if else

//if(condicion){
  //  sentencia1
//}else{
  //  sentencia2
//}

let numeroUno = 20;

if(numeroUno > 10){
    console.log("Es mayor numero uno")
}else{
    console.log("Es menor numero uno")
}

let queso = 30;

if(queso){
    console.log("siiiii ! hay queso")
}else{
    console.log("no hay queso :C ")
}

//else if

//if(condicion1){
  //  sentencia1
//}else if(condicion2){
  //  sentencia2 
//}
//else{
  //  sentencia3
//}

let numero3 ;

if(numero3 > 10){
    console.log("Es mayor")
}else if(numero3 < 10){
    console.log("Es menor")
}
else{
    console.log("ninguno de los anteriores")
}

let numeroDos = 0;

if(numeroDos > 0){
    console.log("Es un numero positivo")
}else if(numeroDos < 0){
    console.log("Es un numero negativo")
}
else{
    console.log(numeroDos+" es cero")
}
//ejemplo combinado

let numero4 = 20;
let numero5 = 5;

if((numero4 >10) || (numero5 > 10)){
    console.log("Uno de los numeros es mayor a 10")
}

//switch--------------------------

//switch(expresion){
    //case x:
        //ejecute
   // break;
    //case y:
        //ejecute
    //break;
    //default:
        //ejecute  
//}

let materias = 40;

switch(materias){
case 1:
    console.log("literatura")
    break;
case 2:
    console.log("matematicas")
    break;
case 18:
    console.log("programacion")
    break;
default:        
    console.log("Elegiste una materia?")
    break;
}

let a = 10;
let b = 20;
let operacion = "multiplicar";

switch(operacion){
    case "sumar":
        console.log(a + b)
        break;
    case "restar":
        console.log(a - b)
        break;
    case "multiplicar":
        console.log(a * b)
        break;
    case "dividir":
        console.log(a / b)
        break;    
    default :
        console.log("estas eligiendo una operacion no valida")           
        break;
    }