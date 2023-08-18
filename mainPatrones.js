function FactoryEnemigoFunc(vidaArg,defensaArg){
    console.log("we're in")

    let nuevoEnemigoDañino = new FactoryEnemigoDañino(vidaArg,defensaArg);

    console.log(nuevoEnemigoDañino);

    let claseEnemigoEnTexto = "";
   
    nuevoEnemigoDañino = nuevoEnemigoDañino.factoryMethod();

    if (nuevoEnemigoDañino === "No se genera"){
        let nuevoEnemigoRandom = new FactoryAleatorio(vidaArg,defensaArg);
   
    nuevoEnemigoRandom = nuevoEnemigoRandom.factoryMethod();

    
    if (nuevoEnemigoRandom instanceof Pato){
        claseEnemigoEnTexto = "Pato (creado con FactoryAleatorio)";
    } else if(nuevoEnemigoRandom instanceof Perro){
        claseEnemigoEnTexto = "Perro (creado con FactoryAleatorio)";
    }else if (nuevoEnemigoRandom instanceof Gato){
        claseEnemigoEnTexto = "Gato (creado con FactoryAleatorio)";
    }
    }else{

        if (nuevoEnemigoDañino instanceof Pato){
        claseEnemigoEnTexto = "Pato (creado con FactoryEnemigoDañino)";
    } else if(nuevoEnemigoDañino instanceof Perro){
        claseEnemigoEnTexto = "Perro (creado con FactoryEnemigoDañino)";
    }else if (nuevoEnemigoDañino instanceof Gato){
        claseEnemigoEnTexto = "Gato (creado con FactoryEnemigoDañino)";
    }
    }


    document.getElementById("mostrar").innerHTML = claseEnemigoEnTexto;
}

function main(){

let vidaArg = Number(document.getElementById("selectVida").value);
let defensaArg = document.getElementById("selectDefensa").value;

console.log(vidaArg,defensaArg);


FactoryEnemigoFunc(vidaArg,defensaArg);

}