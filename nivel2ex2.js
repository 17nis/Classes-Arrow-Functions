class Persona {
    constructor(nom){
        this.nom = nom;
    }
    decirNombre(){//mètode - imprimeix per consola el parametre NOM
        return this.nom;
    }
}

const p1 = new Persona("Joan");


console.log(p1.decirNombre());//invocar des de fora de la classe