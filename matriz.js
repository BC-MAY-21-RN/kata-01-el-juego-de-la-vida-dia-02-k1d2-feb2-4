var filas = 6;
var columnas = 6;
var matriz = [];
var vecinasv = 0;
var vecinasm = 0;
var matrizsecond = [];


function condicionInicial(filas, columnas){
    var filas = filas;
    var columnas = columnas;
    
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

    EvaluarVecinas()
    return matriz;
    
}


function imprimir(){
    x = 2;
    y = 1;
    lix = x - 1;
    lsx = x + 1;
    liy = y - 1;
    lsy = y + 1;
    
    console.log("Fila superior: ", matriz[lix])
    console.log("Fila evaluada: ", matriz[x])
    console.log("Fila inferior: ", matriz[lsx])
    console.log("Celda evaluada: ", matriz[x][y])
    for(n=liy; n<lsy + 1; n++){
        
        if(matriz[lix][n]==="🙂"){
            vecinasv = vecinasv + 1
        }else{
            vecinasm = vecinasm +1
        }
    }
    for(n=liy;n<lsy +1;n++){
        if(matriz[lsx][n]==="🙂"){
            vecinasv = vecinasv + 1
        }else{
            vecinasm = vecinasm +1
        }
    }
    if(matriz[x][y] === "🙂"){
        if(vecinasv<2 || vecinasv>3){
            matriz[x][y] = "💀"
        }
    }else{
        if(vecinasm > 2){
            matriz[x][y] = "🙂"
        }
    }
    console.log("Vecinas fila superior vivas: ", vecinasv)
    console.log("Vecinas fila superior muertas: ", vecinasm)
    console.log("Celda final: ", matriz[x][y])

}

function viveOMuere(celv, celm, x, y) {
    //console.log("Fila: ", y, "Columna: ", x)
    if(matriz[x][y] === "🙂") {
        //console.log("La cecula evaluada esta viva")
        if(celv < 2 || celv > 3) {
            matrizsecond[x][y] = "💀"
            //console.log("La viva muere")
        }else {
            //console.log("La viva vive")
        }
    }else {
        //console.log("La celula evaluada esta muerta")
        if(celv == 3) {
            matrizsecond[x][y] = "🙂"
            //console.log("La muerta vive")
        }
        if(celm > 2) {
            matrizsecond[x][y] = "🙂"
            //console.log("La muerta vive")
        }
    }

    //console.log("Vecinas vivas: ", celv, " Vecinas muertas: ", celm, " Celda inicial: ", matriz[x][y], "Celda final: ", matrizsecond[x][y])
    //console.log("Primera matriz: ", matriz, "Segunda matriz: ", matrizsecond)

}

function EvaluarVecinas() {
    lsx = columnas -2;
    lix = 1;
    lsy = filas - 2;
    liy = 1
    celulasv = 0;
    celulasm = 0;
    matrizsecond = matriz;

    /*console.log("Fila superior: ", matriz[0])
    console.log("Fila evaluada: ", matriz[x])
    console.log("Fila inferior: ", matriz[2])
    console.log("Celda evaluada: ", matriz[x][y])*/
;
    for(n=1;n<lsy+1;n++){
        for(m=1;m<lsx+1;m++){
            if(matriz[(m-1)][n] === "🙂") {
                celulasv++;
            } else {
                celulasm++;
            }
            if(matriz[m][(n-1)] === "🙂") {
                celulasv++;
            } else {
                celulasm++;
            }
            if(matriz[m][(n+1)] === "🙂") {
                celulasv++;
            } else {
                celulasm++;
            }
            if (matriz[(m+1)][n] === "🙂") {
                celulasv++;
            } else {
                celulasm++;
            }

            viveOMuere(celulasv, celulasm, m, n)
            celulasv = 0;
            celulasm = 0
        }
    }
    
    

}

matriz = condicionInicial(filas, columnas);