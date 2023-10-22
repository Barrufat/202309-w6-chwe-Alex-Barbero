import App from "./components/App/App.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.js";
import type { Pokemon, PokemonDetails, PokemonResponse } from "./types";

type ButtonAction = () => Record<string, unknown>;

const urlPrefix = "https://pokeapi.co/api/v2/pokemon?offset=";
let page = 0;
const urlSufix = "&limit=10";
let currentPokemons: Pokemon[];

export const getPokemons = async (
  prefix: string,
  page: number,
  sufix: string,
): Promise<Pokemon[]> => {
  try {
    const response = await fetch(`${prefix}${page}${sufix}`);
    const pokemons = (await response.json()) as PokemonResponse;

    return pokemons.results;
  } catch {
    throw new Error("Error fetching data from Pokemon API");
  }
};

export const getPokemonDetails = async (
  detailUrl: string,
): Promise<PokemonDetails> => {
  try {
    const response = await fetch(`${detailUrl}`);
    const pokemonDetails = (await response.json()) as PokemonDetails;

    return pokemonDetails;
  } catch {
    throw new Error("Error fetching pokemon details from Pokemon API");
  }
};

// Export const printPokemonDetails = (pokemonDetails: PokemonDetails) => {
//   const mainDetailElement = document.querySelector(".main-detail-container")!;
//   const pokemonDetailCard = new PokemonCard(mainDetailElement, pokemonDetails);
//   pokemonDetailCard.render();
// };

const deletePokemons = () => {
  const pokedex = document.querySelector(".pokedex")!;
  while (pokedex.hasChildNodes())
    pokedex.removeChild(pokedex.firstChild as Element);
};

const printPokemons = () => {
  deletePokemons();
  const pokedex = document.querySelector(".pokedex");
  currentPokemons.forEach(async (pokemon: Pokemon) => {
    // Const newPokemon = document.createElement("span");
    // newPokemon.textContent = pokemon.name;
    // pokedex?.appendChild(newPokemon);

    const pokemonDetails: PokemonDetails = await getPokemonDetails(pokemon.url);

    const newPokemon = document.createElement("a");
    newPokemon.href = "./details";
    pokedex?.appendChild(newPokemon);

    const pokeImageSource =
      pokemonDetails.sprites.other["official-artwork"].front_default;

    const newPokemonImage = new Image(200, 200);

    newPokemonImage.src = pokeImageSource;
    newPokemon?.appendChild(newPokemonImage);

    newPokemon.addEventListener("click", (): void => {
      const mainDetailElement = document.querySelector(
        ".main-detail-container",
      )!;
      const pokemonDetailCard = new PokemonCard(
        mainDetailElement,
        pokemonDetails,
      );
      pokemonDetailCard.render();
    });
  });
};

const getMorePokemons = async () => {
  page += 10;
  const pokemons = await getPokemons(urlPrefix, page, urlSufix);
  currentPokemons = pokemons;
  printPokemons();
};

const getLessPokemons = async () => {
  page -= 10;
  const pokemons = await getPokemons(urlPrefix, page, urlSufix);
  currentPokemons = pokemons;
  printPokemons();
};

const bodyElement = document.querySelector(".app")!;
const appElement = new App(bodyElement, "main", "main-container");
appElement.render();

const controllersElement = document.querySelector(".controllers-box")!;

const buttonLess = document.createElement("button");
buttonLess.className = "button";
buttonLess.textContent = "Search Less";
controllersElement.appendChild(buttonLess);

const buttonMore = document.createElement("button");
buttonMore.className = "button";
buttonMore.textContent = "Search More";
controllersElement.appendChild(buttonMore);

buttonMore.addEventListener(
  "click",
  getMorePokemons as unknown as ButtonAction,
);

buttonLess.addEventListener(
  "click",
  getLessPokemons as unknown as ButtonAction,
);

const pokemons = await getPokemons(urlPrefix, page, urlSufix);
currentPokemons = pokemons;
printPokemons();
