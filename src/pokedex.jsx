import { useState } from "react";
import { Pokemon } from "./pokemon";

export function Pokedex({start, end}) {

  const _start = start || 0;
  const pokemons = [];
  for (let i = _start; i <= end; i++) {
    pokemons.push(<Pokemon n={i}></Pokemon>);
  }
  return (
    <div className="ft-pokedex">
      {pokemons}
    </div>
  );
}