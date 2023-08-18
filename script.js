function calcularBMI() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    document.getElementById("resultadoBMI").textContent = "Ingresa valores válidos.";
    return;
  }

  var bmi = peso / (altura * altura);

  var resultado = "";

  if (bmi < 18.5) {
    resultado = "Bajo de peso";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultado = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultado = "Sobrepeso";
  } else {
    resultado = "Obeso";
  }

  document.getElementById("resultadoBMI").textContent = "Tu BMI es " + bmi.toFixed(2) + ". " + resultado;
}


  
  function likes(numero) {
    if (numero < 1000) {
      return numero.toString();
    } else if (numero < 1000000) {
      return (numero / 1000).toFixed(0) + "K";
    } else {
      return (numero / 1000000).toFixed(0) + "M";
    }
  }
  
  function likes(numero) {
    if (numero >= 1000000) {
      return (numero / 1000000).toFixed(1) + "M";
    } else if (numero >= 1000) {
      return (numero / 1000).toFixed(0) + "K";
    } else {
      return numero.toString();
    }
  }
  
  function calcularLikes() {
    var numero = parseFloat(document.getElementById("numero").value);
  
    if (isNaN(numero)) {
      document.getElementById("resultadoLikes").textContent = "Ingrese un número válido.";
      return;
    }
  
    var resultado = likes(numero);
    document.getElementById("resultadoLikes").textContent = "Resultado: " + resultado;
  }

  
  function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
      return ingresos * 0.4;
    } else {
      return 0;
    }
  }
  
  function calcularImpuestos() {
    var edad = parseInt(document.getElementById("edad").value);
    var ingresos = parseFloat(document.getElementById("ingresos").value);
  
    if (isNaN(edad) || isNaN(ingresos)) {
      document.getElementById("resultadoImpuestos").textContent = "Ingresa valores válidos.";
      return;
    }
  
    var impuestos = 0;
  
    if (edad >= 18 && ingresos >= 1000) {
      impuestos = ingresos * 0.4;
    }
  
    document.getElementById("resultadoImpuestos").textContent = "Impuestos a pagar: Q." + impuestos.toFixed(2);
  }

  function imprimirArreglo() {
    var arregloTexto = document.getElementById("arreglo").value;
    var elementos = arregloTexto.split(",").map(function(elemento) {
      return elemento.trim();
    });
  
    var resultadoArreglo = document.getElementById("resultadoArreglo");
    resultadoArreglo.innerHTML = ""; 

    for (var i = 0; i < elementos.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = elementos[i];
      resultadoArreglo.appendChild(listItem);
    }
  }
  
  
  function calcularNumeroDeCaracteres() {
    var texto = document.getElementById("texto").value;
    var caracter = document.getElementById("caracter").value;
  
    if (!texto || !caracter) {
      document.getElementById("resultadoCaracteres").textContent = "Ingresa el texto y el carácter.";
      return;
    }
  
    var count = 0;
    for (var i = 0; i < texto.length; i++) {
      if (texto.charAt(i) === caracter) {
        count++;
      }
    }
  
    document.getElementById("resultadoCaracteres").textContent = `El carácter "${caracter}" aparece ${count} veces en el texto.`;
  }
  


  
  function sumarArreglo() {
    var arregloTexto = document.getElementById("arreglo").value;
    var arregloNumeros = arregloTexto.split(",").map(function(num) {
      return parseFloat(num.trim());
    });
  
    var suma = 0;
    for (var i = 0; i < arregloNumeros.length; i++) {
      suma += arregloNumeros[i];
    }
  
    document.getElementById("resultadoSuma").textContent = "La suma es: " + suma;
  }
  

  function multiplicarArreglo() {
    var arregloTexto = document.getElementById("arreglo").value;
    var arregloNumeros = arregloTexto.split(",").map(function(num) {
      return parseFloat(num.trim());
    });
  
    var multiplicacion = 1;
    for (var i = 0; i < arregloNumeros.length; i++) {
      multiplicacion *= arregloNumeros[i];
    }
  
    document.getElementById("resultadoMultiplicacion").textContent = "La multiplicación es: " + multiplicacion;
  }
 
  function sumarArregloRango() {
    var arregloTexto = document.getElementById("arreglo").value;
    var arregloNumeros = arregloTexto.split(",").map(function(num) {
      return parseFloat(num.trim());
    });
  
    var inicio = parseInt(document.getElementById("inicio").value);
    var fin = parseInt(document.getElementById("fin").value);
  
    if (isNaN(inicio) || isNaN(fin) || inicio < 0 || fin >= arregloNumeros.length) {
      document.getElementById("resultadoSumaRango").textContent = "Ingrese valores válidos.";
      return;
    }
  
    var suma = 0;
    for (var i = inicio; i <= fin; i++) {
      suma += arregloNumeros[i];
    }
  
    document.getElementById("resultadoSumaRango").textContent = "La suma en el rango es: " + suma;
  }
  
  function encontrarMaxSinMath() {
    var numerosTexto = document.getElementById("numeros").value;
    var numeros = numerosTexto.split(",").map(function(numero) {
      return parseFloat(numero.trim());
    });
  
    if (numeros.length === 0) {
      document.getElementById("resultadoMax").textContent = "Ingrese valores válidos.";
      return;
    }
  
    var maximo = encontrarMaximoSinMath(numeros);
  
    document.getElementById("resultadoMax").textContent = "El número máximo es: " + maximo;
  }
  
  function encontrarMaximoSinMath(numeros) {
    var maximo = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
      if (numeros[i] > maximo) {
        maximo = numeros[i];
      }
    }
    return maximo;
  }
  
  function encontrarMaxConMath() {
    var numerosTexto = document.getElementById("numeros").value;
    var numeros = numerosTexto.split(",").map(function(numero) {
      return parseFloat(numero.trim());
    });
  
    if (numeros.length === 0) {
      document.getElementById("resultadoMax").textContent = "Ingrese valores válidos.";
      return;
    }
  
    var maximo = Math.max(...numeros);
  
    document.getElementById("resultadoMax").textContent = "El número máximo es: " + maximo;
  }
  
  