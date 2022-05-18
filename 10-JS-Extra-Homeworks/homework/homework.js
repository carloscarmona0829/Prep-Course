// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const matriz = Object.entries(objeto);
  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí  
  const array = [];
  var obj = new Object();
  for (let i = 0; i < string.length; i++) {
    var cantidad = 0;
    var caracter1 = string.charAt(i);
    if (array.includes(caracter1) === false) {
      for (let j = 0; j < string.length; j++) {
        var caracter2 = string.charAt(j);
        if (caracter1 === caracter2) {
          cantidad = cantidad + 1;
        }
      }
      var nombrePerzonalizado = caracter1;
      var valorPerzonalizado = cantidad;
      obj[nombrePerzonalizado]=valorPerzonalizado;
    }
  }
  return obj;
}
  


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = "";
  var min = "";
  for (let i = 0; i < s.length; i++) {
    if (/[A-Z]/.test(s.charAt(i)) === true) {
      may = may + (s.charAt(i));      
    } else if (/[A-Z]/.test(s.charAt(i)) === false) {
      min = min + (s.charAt(i));      
    }
  }
  var result = may + min;
  return result;
}

  function asAmirror(str) {
    //La función recibe una frase.
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    var array = str.split(" ");  
    var result = "";
    for (let i = 0; i < array.length; i++) {
      var cadena = array[i].split("").reverse().join("");
      result = result + " " + cadena;
    }
    return result.trim();
  }

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero.toString();
  if(num.split("").reverse().join("") === numero.toString()){
    return "Es capicua";
  } 
  return "No es capicua"; 
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí 
  cadena = cadena.replaceAll("a", "")
  cadena = cadena.replaceAll("b", "")
  cadena = cadena.replaceAll("c", "")
  return cadena;

  // var array = cadena.split("");  
  // for(let i=0;i<array.length;i++){
  //   if(array[i].toString()=== "a" || array[i].toString()=== "b" || array[i].toString()=== "c"){
  //     var a = array.indexOf("a");      
  //     array.splice(a, 1);
  //     var b = array.indexOf("b");      
  //     array.splice(b, 1);
  //     var c = array.indexOf("c");      
  //     array.splice(c, 1);
  //   }
  // } 
  // return array.toString().replaceAll(",", "");
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var newArray = arr.push(arr[i]) 
  for (let i = 0; i < arr.length; i++) {    
    if(arr[i].length < newArray[i].length){
     var newArray = arr.unshift(arr[i]) 
        
      return newArray;
    }
    console.log(count);
    //var newArray = arr.push(arr[i]);    
    // if(arr[i].length < newArray[i].length){
    //   console.log(arr[i].length);
    //   //console.log(newArray[i].length);
    //   //newArray = arr.unshift(arr[i])
    // }    
  }
  return "Mayor o igual"
  //console.log(count);
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
