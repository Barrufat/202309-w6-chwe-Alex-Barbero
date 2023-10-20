import { type Pokemon, type PokemonResponse } from "./types";

const urlPrefix = "https://pokeapi.co/api/v2/pokemon?offset=";
const urlSufix = "&limit=10";

const page = "0";

const getPokemons = async (
  prefix: string,
  sufix: string,
  page: string,
): Promise<Pokemon[]> => {
  const response = await fetch(prefix + page + sufix);
  const pokemons = (await response.json()) as PokemonResponse;

  return pokemons.results.map((pokemon: Pokemon) => pokemon);
};

const pokemons = await getPokemons(urlPrefix, page, urlSufix);

pokemons.forEach((pokemon: Pokemon) => {
  console.log(pokemon);
});
