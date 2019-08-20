function Pokemon(){
    this.type = 'Fire';
    this.flying = false;
    this.specie = 'Flame Pokémon';
    this.pockemonType = '';

    this.getType = function (){
        return this.type;
    }
    this.getSpecie = function (){
        return this.specie;
    }
    this.canFly = function (){
        return this.flying;
    }
    this.getPokemonType = function (){
        return this.pockemonType;
    } 
}

function Charmander(){
    Pokemon.call(this);
    this.specie = 'Lazard Pokemon';
    this.pockemonType = 'Charmander';
    this.evolve = () => new Charmeleon();
}
function Charmeleon(){
    Pokemon.call(this);
    this.pockemonType = 'Charmeleon';
    this.evolve = () => new Charizard();

}
function Charizard(){
    Pokemon.call(this);
    this.flying = true;
    this.pockemonType = 'Charizard';
    this.evolve = () => this;
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

Charmeleon.prototype = Object.create(Pokemon.prototype);
Charmeleon.prototype.constructor = Charmeleon;

Charizard.prototype = Object.create(Pokemon.prototype);
Charizard.prototype.constructor = Charizard;


const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmeleon.getType() === charizard.getType());

console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);

console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());

console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly());

function Pichu(){
    Pokemon.call(this);
    this.pockemonType = 'Pichu'
    this.specie = 'Mouse Pokémon';
    this.evolve = () => new Pikachu();
}

function Pikachu(){
    Pokemon.call(this);
    this.pockemonType = 'Pickachu';
    this.specie = 'Mouse Pokémon';
    this.evolve = () => new Raichu();
}

function Raichu(){
    Pokemon.call(this);
    this.pockemonType = 'Raichu';
    this.specie = 'Mouse Pokémon';
    this.evolve = () => this;
}

Pichu.prototype = Object.create(Pichu.prototype);
Pichu.prototype.constructor = Pichu;

Pikachu.prototype = Object.create(Pikachu.prototype);
Pikachu.prototype.constructor = Pikachu;

Raichu.prototype = Object.create(Raichu.prototype);
Raichu.prototype.constructor = Raichu;

const pichu = new Pichu();
console.log(pichu.getPokemonType());

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType());
console.log(pikachu.constructor === Pikachu);

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType());
console.log(raichu.constructor === Raichu);

const raichu2 = raichu.evolve(); 
console.log(raichu2 === raichu); 
console.log(raichu2);

