class Factory{
    constructor(vidaJugador, defensaJugador){
        this.vidaJugador = vidaJugador;
        this.defensaJugador = defensaJugador;
    }

    factoryMethod(){
        return new Enemigo(this.vidaJugador,this.defensaJugador);
    }
}

class FactoryAleatorio extends Factory{
    constructor(vidaJugador, defensaJugador){
        super(vidaJugador, defensaJugador);
    }
    factoryMethod(){
        let numRandom = Math.random()*4;
        if (numRandom === 1){
            return new Perro;
        }else if (numRandom === 2){
            return new Pato;

        }else if (numRandom === 3){
            return new Gato;
        }
    }
    //Modifica el FactoryMethod de su clase padre
}

class FactoryEnemigoDañino extends Factory{
    constructor(vidaJugador, defensaJugador){
        super(vidaJugador, defensaJugador);
    }

    factoryMethod(){
        if (this.vidaJugador < 5 && this.defensaJugador === "defensaPato"){
            let numRandom = Math.random()*3;
            if (numRandom === 1){
                return new Perro;
            }else if (numRandom === 2){
                return new Gato;
            } 
        }else if (this.vidaJugador < 5 && this.defensaJugador === "defensaPerro"){
            let numRandom = Math.random()*3;
            if (numRandom === 1){
                return new Perro;
            }else if (numRandom === 2){
                return new Pato;
            } 
        } else if (this.vidaJugador < 5 && this.defensaJugador === "defensaGato"){
            let numRandom = Math.random()*3;
            if (numRandom === 1){
                return new Perro;
            }else if (numRandom === 2){
                return new Pato;
            } 
        }
    }
        //Modifica el FactoryMethod de su clase padre
}



class Enemigo{
    constructor(argVidaJugador,argDefensaJugador){
        this.argVidaJugador = argVidaJugador;
        this.argDefensaJugador = argDefensaJugador;
    }
}

class Pato extends Enemigo{
    constructor(argVidaJugador,argDefensaJugador){
        super(argVidaJugador,argDefensaJugador);
    }
    ataquePato(){
        // La funcionalidad del enemigo Pato
    }
}

class Perro extends Enemigo{
    constructor(argVidaJugador,argDefensaJugador){
        super(argVidaJugador,argDefensaJugador);
    }
    ataquePerro(){
        // La funcionalidad del enemigo Perro
    }
}

class Gato extends Enemigo{
    constructor(argVidaJugador,argDefensaJugador){
        super(argVidaJugador,argDefensaJugador);
    }
    ataqueGato(){
        // La funcionalidad del enemigo Gato
    }
}

