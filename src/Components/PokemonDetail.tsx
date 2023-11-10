
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface PokemonDetailProps {}

interface Pokemon {
  id: number;
  name: string;
}

const PokemonDetail: React.FC<PokemonDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
          id: response.data.id,
          name: response.data.name,
        });
      } catch (error) {
        console.error(`Error fetching Pokémon details for ${id}:`, error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="text-center bg-yellow-400">
      <h2 className="text-2xl font-bold mb-4">Pokemon Detail</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        className="mx-auto mb-4"
      />
      <p className="text-lg font-bold">ID: {pokemon.id}</p>
      <p className="text-lg font-bold">Name: {pokemon.name}</p>
    </div>
  );
};

export default PokemonDetail;
