import React, { useState, useEffect } from 'react';
const api = "https://pokeapi.co/api/v2/pokemon/";

export function Pokemon({n}) {

  const [myPokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(api + `${n}`);
      const result = await response.json();
      setPokemon(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (<div className='ft-pokemon'>Pokemon...</div>);
  }

  return (
    <div className="ft-pokemon">
      <img src={myPokemon.sprites.front_default} alt="Pokemon"/>
      <span>{myPokemon.name}</span>
    </div>
  );
}