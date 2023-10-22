import PokemonCard from "./PokemonCard";
import testPokemon from "../../mocks/mockPokemon.json";
import { type PokemonDetails } from "../../types";

describe("Given a PokemonCard component", () => {
  describe("When it receives a Bulvasaur", () => {
    test("Then it should return bulvasaur as name property ", async () => {
      const bodyElement = document.querySelector("body")!;

      const testPokemonCard = new PokemonCard(
        bodyElement,
        testPokemon as unknown as PokemonDetails,
      );
      const testPokemonName = testPokemonCard.pokemonDetails.name;

      const espectedName = "bulbasaur";

      expect(testPokemonName).toBe(espectedName);
    });
  });
});
