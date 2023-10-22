import type { PokemonDetails } from "../../types";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemonDetails: PokemonDetails,
  ) {
    super(parentElement, "div", "pokemon-card");
  }

  protected populate(): void {
    this.element.innerHTML = `
    <article class="pokemon-card__box">
    <h1 class="pokemon-card__title">${this.pokemonDetails.name}</h1>
    <img class="pokemon-card__img" src="${this.pokemonDetails.sprites.other["official-artwork"].front_shiny}"
     alt="${this.pokemonDetails.name}" width="400" height"400"/>
    <span class="pokemon-card__detail">Number: #${this.pokemonDetails.id}</span>
    </article>
    `;

    const goToPokedexButton = document.createElement("button");
    goToPokedexButton.className = "pokemon-card__close-button";
    goToPokedexButton.textContent = "Go to Pokedex";
    this.element.appendChild(goToPokedexButton);

    goToPokedexButton.addEventListener("click", () => {
      this.parentElement.classList.toggle("off");
    });
  }
}

export default PokemonCard;
