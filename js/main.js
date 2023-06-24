function suma(){
    //La variable A es para ingresar el primer número a sumar, la variable B es para capturar el segundo... 
    //...número a sumar, y la variable S es para realizar la operación, el alert es para mostrar el resultado...
    //...al final de todo.
    let A=0;
    let B=0;
    let S=0;
    A=parseInt(prompt("Por favor ingrese el primer número a sumar."))
    B=parseInt(prompt("Por favor ingrese el segundo número a sumar."))
    S=A+B;
    alert ("La suma de los números ingresados es:"+S)
}
function opBasicas(){
    //suma resta multiplicación y divición.
    //La variable C es para ingresar el primer número con el que se van a realizar las operaciones.
    //La variable D es para ingresar el segundo número con el que se van a realizar las operaciones.
    //Las variables SU, R, M, y D son para realizar las operaciones de suma, resta, multiplicación y divición...
    //...en el mismo orden.
    let C=0;
    let D=0;
    let SU=0;
    let R=0;
    let M=0;
    let DI=0;
    alert("A continuación debera ingresar dos números que se van a realizar las operaciones basicas.")
    C=parseInt(prompt("Por favor ingrese el primer número."))
    D=parseInt(prompt("Por favor ingrese el segundo número."))
    SU=C+D;
    R=C-D;
    M=C*D;
    DI=C/D;
    alert("La suma de "+C+" mas "+D+" es igual a="+SU+"\nLa resta de "+C+" por "+D+" es igual a="+R+
    "\nla multiplicación de "+C+" por "+D+" es igual a="+M+"\nLa divición de "+C+" por "+D+" es ingual a="+DI)
}
function cuadrado(){
    //La variable E es para ingresar el número del que se quiere saber el cuadrado.
    //La variable F para realizar la operación
    let E=0;
    let F=0;
    E=parseInt(prompt("Por favor ingrese el número del que quiere saber el cuadrado"))
    F=E*E;
    alert("El cuadrado del número ingresado es: "+ F);
}
function area(){
    //base*altura/2
    let BA=0;
    let AL=0;
    let AR=0;
    BA=parseInt(prompt("Por favor ingrese la base del triangulo."))
    AL=parseInt(prompt("Por favor ingrese la altura del triangulo."))
    AR=(BA*AL)/2;
    alert("El area del triangulo es: "+AR)
}
/*
Un individuo desea invertir su capital en un banco y requiere un sistema que le permita saber cuanto dinero
ganara despues de "N" numero de años, teniendo en cuenta que el banco paga un interes del 1,7% mensual.
el total de lo que invertio mas la ganancia
*/
function inversion(){
    let INVE = 0;
    let A = 0;
    let MES = 0;
    INVE = parseInt(prompt("Por favor ingrese la cantidad de la inversión."));
    A = parseInt(prompt("Ingrese la cantidad de años que va a dejar su inversión."));
    MES = A * 12;
    let GANANCIA = (INVE * 0.017 * MES).toFixed(2);
    let TOTAL = parseFloat(GANANCIA) + INVE * MES;
    alert("Lo que invierte mensualmente es: $" +INVE +"\nLo que invirtió en total es: $" +INVE * MES +"\nLo que gana es: $" +
    GANANCIA +"\nEl total del dinero que tendrá es: $" +TOTAL.toFixed(2));
}

function nacimiento(){
    let ED=0;
    let A=0;
    let OP=0;
    alert("Para conocer su año de nacimiento siga las instrucciones.")
    ED=parseInt(prompt("Ingrese la edad que cumplió o cumplirá este año."))
    A=parseInt(prompt("Ingrese el año actual."))
    OP=A-ED;
    alert("Su año de nacimiento es: "+OP)
}
function conversion(){
    let M=0;
    let K=0;
    let P=0;
    M=parseInt(prompt("Ingrese la unidad en metros para realizar su conversión."))
    K=M*0.001;
    P=M*39.37008;
    alert(M+" metros equivalen a: \n"+K+" kilometros.\n"+P+" pulgadas.") 
}
