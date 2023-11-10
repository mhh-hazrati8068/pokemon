import React from "react";
import { Link } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <div>
        <h1 className="p-10 bg-yellow-300 hover:bg-yellow-400 rounded-sm transition duration-300 mb-2 text-center text-xl font-bold">Pokemons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.name}
            to={`/pokemon/${pokemon.name}`}
            className="p-4 bg-yellow-200 hover:bg-yellow-300 rounded-md transition duration-300"
          >
            <div className="text-center">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemons.indexOf(pokemon) + 1
                }.png`}
                alt={pokemon.name}
                className="mx-auto mb-2"
              />
              <p className="text-lg font-bold">{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
