
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CSpinner from './CSpinner';

interface PokemonDetailProps { }

interface Pokemon {
  id: number;
  name: string;
  baseExperience: number
  weight: number
  height: number
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
          baseExperience: response.data.base_experience,
          weight: response.data.weight,
          height: response.data.height,
        });
      } catch (error) {
        console.error(`Error fetching Pokémon details for ${id}:`, error);
      }
    };

    fetchPokemon();
  }, [id]);

  return (
    <>
      {
        !pokemon ? (
          <CSpinner caption="Data Is Coming ..." />
        ) : (
          <div className="text-center bg-yellow-400 p-4 m-3 rounded shadow-lg flex flex-col items-center justify-center gap-4 group duration-200 hover:-translate-y-1">
            <div>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} className='rounded-full bg-gray-200 w-32 h-32' />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div>
                Name : {pokemon.name}
              </div>
              <div>BaseExperience : {pokemon.baseExperience}</div>
              <div>Weight : {pokemon.weight}</div>
              <div>Height : {pokemon.height}</div>
            </div>
          </div>
        )
      }

    </>
  );
};

export default PokemonDetail;
