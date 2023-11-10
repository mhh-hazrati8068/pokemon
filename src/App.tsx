import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./Components/PokemonList";
import PokemonDetail from "./Components/PokemonDetail";
import axios from "axios";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        if (response.status == 200) {
          setPokemons(response.data.results);
          setLoading(false)
        }
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList pokemons={pokemons} isLoading={loading} />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
