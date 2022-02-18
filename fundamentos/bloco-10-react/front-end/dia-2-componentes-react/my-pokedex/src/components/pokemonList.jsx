import React from "react";
import pokemons from "../data";
import Poke from "./poke";

class PokemonList extends React.Component {
    render(){
        return(
            pokemons.map((pokemon) => {
                return <Poke pokemonData={pokemon} key={pokemon.id} />
            })
        )
    }
}

export default PokemonList;