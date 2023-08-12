import React, { useState, useEffect } from "react";
import axios from "axios";


const SearchPoke = () => {
 
  const [pokemons, setPokemons] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);

  
  useEffect(() => {
    if (sendRequest) {
      getPokemonsFromAPI(); 
      setSendRequest(false);
    }
  }, [sendRequest]);

  

  const handleOnClickFetchPokemons = (e) => {
    setSendRequest(true);
  };

  
  const getPokemonsFromAPI = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=807"
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <div className="App bg-light p-3 text-left">
      <div className="w-25 mt-2 mx-auto">
        <button
          className="btn btn-secondary mb-3 d-block"
          onClick={handleOnClickFetchPokemons}
        >
          {" "}
          Fetch Pokemon
        </button>
        <p className="mb-1">List of Pokemons: </p>
        <ol>
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPoke;