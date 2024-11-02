import { Pokemon } from "./pokemon";
import { useState, useEffect } from "react";

const Pokedex = ({start, end}) => {


  const [pokemons, setPokemons] = useState([]);
  let loading = false;
  useEffect(() => {
    const _start = start || 1;
    const inicial_pokemons = [];
    for (let i = _start; i <= end; i++) {
      inicial_pokemons.push(<Pokemon key={i} n={i}></Pokemon>);
    }
    setPokemons(inicial_pokemons);
    window.addEventListener("scroll", () => {
      if (loading) return;
      loading = true;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setPokemons((pokemons) => {
          const new_pokemons = [...pokemons];
          for (let i = 0; i < 20; i++) {
            new_pokemons.push(<Pokemon key={new_pokemons.length + 1} n={new_pokemons.length + 1}></Pokemon>);
          } 
          return new_pokemons;
        });
      }
      loading = false;
    });
  }, []);

  return (
    <div className="ft-pokedex">
      {pokemons}
    </div>
  );
}

export default Pokedex;