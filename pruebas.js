var filas = 4;
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

    return matriz;
}


function imprimir(matriz){
    for(let y=0;y<filas;y++){
        console.log(matriz[y].join(" "));
    }
}

matriz = condicionInicial(filas, columnas);
console.log(matriz)
imprimir(matriz);

function recorrerCelda(matriz){
    var new_matriz =  rebuild_matriz(matriz)
    var sum_vecinos = 0
    for(let x=0; x<filas; x++){
      for(let y=0; y<columnas; y++){
        var cell_id= matriz[x][y]
          sum_vecinos = sum_vecinos + calcularVecino(matriz[x][y])
        
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
  
function rebuild_matriz(matriz){

}
