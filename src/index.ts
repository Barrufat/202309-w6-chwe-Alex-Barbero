import App from "./components/App/App.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.js";
import type { Pokemon, PokemonDetails, PokemonResponse } from "./types";

type ButtonAction = () => Record<string, unknown>;

const urlPrefix = "https://pokeapi.co/api/v2/pokemon?offset=";
let page = 0;
const urlSufix = "&limit=12";
let currentPokemons: Pokemon[];
export const currentPokemonUrl = "https://pokeapi.co/api/v2/pokemon/1/";

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
  const pokedex = document.querySelector(".pokemon-box__pokedex")!;
  while (pokedex.hasChildNodes())
    pokedex.removeChild(pokedex.firstChild as Element);
};

const printPokemons = () => {
  const mainDetailElement = document.createElement("div");
  mainDetailElement.className = "main-detail-container off";
  bodyElement.appendChild(mainDetailElement);

  deletePokemons();

  const pokedex = document.querySelector(".pokemon-box__pokedex");

  currentPokemons.forEach(async (pokemon: Pokemon) => {
    const pokemonDetails: PokemonDetails = await getPokemonDetails(pokemon.url);

    const newPokemon = document.createElement("li");
    newPokemon.className = "pokemon-box__pokemon-view";
    pokedex?.appendChild(newPokemon);

    const pokeImageSource =
      pokemonDetails.sprites.other["official-artwork"].front_default;

    const newPokemonImage = new Image(150, 150);
    newPokemonImage.src = pokeImageSource;
    newPokemon?.appendChild(newPokemonImage);

    newPokemon.addEventListener("click", (): void => {
      while (mainDetailElement.hasChildNodes())
        mainDetailElement.removeChild(mainDetailElement.firstChild as Element);

      const pokemonDetailCard = new PokemonCard(
        mainDetailElement,
        pokemonDetails as unknown as PokemonDetails,
      );
      pokemonDetailCard.render();

      mainDetailElement.classList.toggle("off");
    });
  });
};

const getMorePokemons = async () => {
  page += 12;
  const pokemons = await getPokemons(urlPrefix, page, urlSufix);
  currentPokemons = pokemons;
  printPokemons();
};

const getLessPokemons = async () => {
  page -= 12;
  const pokemons = await getPokemons(urlPrefix, page, urlSufix);
  currentPokemons = pokemons;
  printPokemons();
};

const bodyElement = document.querySelector(".app")!;
const appElement = new App(bodyElement, "main", "main-container");
appElement.render();

const controllersElement = document.querySelector(".pokemon-box__controllers")!;

const buttonLess = document.createElement("button");
buttonLess.className = "button--search";
buttonLess.textContent = "Search Less";
controllersElement.appendChild(buttonLess);

const buttonMore = document.createElement("button");
buttonMore.className = "button--search";
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
