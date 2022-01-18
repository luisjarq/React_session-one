import { useState, useEffect } from "react";

export const MyFirstFetchingInput = () => {
  const [filter, setFilter] = useState("ditto");
  const [pokemonC, setpokemonC] = useState([]);
  useEffect(() => {
    const getPokemonFiltered = async () => {
      const pokemon = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + filter
      );
      const pokeJson = await pokemon.json();
      return {
        ...pokeJson,
        name: pokeJson.name,
        image: pokeJson.sprites.front_default,
      };
    };
    getPokemonFiltered().then((p) => setpokemonC(p));
  }, [filter]);
  return (
    <div>
        <h3>Busca tu pokemon</h3>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        {
            pokemonC.map((pokemon, index) =>
                <div key={index}>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
            )
        }
    </div>
)
};
