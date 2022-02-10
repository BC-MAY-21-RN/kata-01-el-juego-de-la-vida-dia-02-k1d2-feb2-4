var filas = 8;
var columnas = 8;
var matriz = [];

for(let y=0;y<filas;y++)
    {

        var matrizInterna = [];
        var matrizInternaVecinos = [];
        for(let x=0;x<columnas;x++)
        {
            

            var num = Math.round(Math.random() * (10 - 1)) + 1;
            
            if(num%2==0){
                cell = "🙂"; 
                matrizInterna.push(cell);

            }
            else{
                cell = "💀"; 
                matrizInterna.push(cell);
            } 

            cell = 0;
            matrizInternaVecinos.push(cell);
        }

        matriz.push(matrizInterna);
    }


function matrizPrincipal(filas, columnas){ //Matriz madre/
    var filas = filas;
    var columnas = columnas;

    var matrizVecinos = [];

    for(let y=0;y<filas;y++)
    {

        var matrizInterna = [];
        var matrizInternaVecinos = [];
        for(let x=0;x<columnas;x++)
        {
            cell = "🙂"; 
            matrizInterna.push(cell);

            //var num = Math.round(Math.random() * (10 - 1)) + 1;
            
            /*if(num%2==0){
                cell = "🙂"; 
                matrizInterna.push(cell);

            }
            else{
                cell = "💀"; 
                matrizInterna.push(cell);
            } */

            cell = 0;
            matrizInternaVecinos.push(cell);
        }

        matriz.push(matrizInterna);
        matrizInterna.splice();

        matrizVecinos.push(matrizInternaVecinos);
        matrizInternaVecinos.splice();

    }

    

    /*for(let y=0;y<filas;y++){
        console.log(matrizVecinos[y].join(" "));
    }*/

    //recorrerMatriz(matriz,matrizVecinos);
    
    //matrizRules(matriz,matrizVecinos);
    return matriz;
}

function imprimirMatrizPrincipal(){
    for(let y=0;y<filas;y++){
        for(let z=0;z<columnas;z++){
            console.log(matriz[y][z]);
            console.log("Fila: ", y, "Columna: ", z)
        }
        
    }
    
}



imprimirMatrizPrincipal()


