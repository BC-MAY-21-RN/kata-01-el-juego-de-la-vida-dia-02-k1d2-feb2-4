var filas = 6;
var columnas = 8;



function condicionInicial(filas, columnas){
    var filas = filas;
    var columnas = columnas;

    var matriz = [];
    
    for(let y=0;y<filas;y++)
    { 
        var matrizInterna = [];
        for(let x=0;x<columnas;x++)
        {           
            var num = Math.round(Math.random() * (10 - 1)) + 1;
            var cell;
            if(num%2==0){
                cell = "🙂";
                matrizInterna.push(cell);
            }
            else{
                cell = "💀";
                matrizInterna.push(cell);
            } 
        }
        matriz.push(matrizInterna);
    }

    for(let y=0;y<filas;y++){
        console.log(matriz[y].join(" "));
    }

    return matriz;
}


function numVecinos(matriz, id_celda){
// return id_celda , sum_vecinos
// cell_id y Array con 8 posiciones
}

function reglasPorCelda(id_celda, sum_vecinos){
  // return id_celda, estado

}


function recorrerCelda(matriz){
//recorremos la matriz
// llamamos la numvecinos para que realice la sumatoria de los vecinos => numVecinos()
// aplicariamos las reglas a la celda y sumatoria de vecinos y esto devolveria => reglasPorCelda()
//  return id_celda, estado
var sum_vecinos = 0
for(let x=0; x<filas; x++){
  for(let y=0; y<columnas; y++){
    var cell_id= matriz[x][y]   
    sum_vecinos = sum_vecinos + calcularVecino(matriz[x-1][y-1])
    sum_vecinos = sum_vecinos + calcularVecino(matriz[x][y-1])
    sum_vecinos = sum_vecinos + calcularVecino(matriz[x+1][y-1])

  }
}
console.log(sum_vecinos)
}

function calcularVecino(vecino){
  if (vecino == "💀" || vecino == "🙂" ){
      if(vecino =="🙂"){
        return 1
      } else{
        return 0
      }
  } else {
    return 0
  } 
}

function imprimir(matriz){
    for(let y=0;y<filas;y++){
        console.log(matriz[y].join(" "));
    }
}










