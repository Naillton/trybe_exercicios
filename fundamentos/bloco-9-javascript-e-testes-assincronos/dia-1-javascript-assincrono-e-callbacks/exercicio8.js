/* const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find((pokemon) => pokemon.name === filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(({ name }) => name === filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails('Chimchar', (err, message) => {
  if (err) return console.log(err);
  return console.log(message);
});

module.exports = {
  getPokemonDetails,
}; */

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function pokName(param) {
  return pokemons.find((pokemon) => pokemon.name === param);
}

function mess(err, message) {
  if (err) return console.log(err);
  return console.log(message);
}

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (filter === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = filter;

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails(pokName('Charmander'),  (err, message) => {
  if (err) return console.log(err);
  return console.log(message);
});

module.exports = {
  getPokemonDetails,
};