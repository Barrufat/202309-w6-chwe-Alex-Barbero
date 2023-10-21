// Import { getPokemons } from "../index.js";
// import { mockFetch } from "./mockFetch.js";
// import mockData from "./mockData.json";

// describe("Given a getPokemons function", () => {
//   describe("When it receives https://pokeapi.co/api/v2/pokemon?offset=0&limit=10", () => {
//     test("Then it should return a list of Pokemons", async () => {
//       const prefix = "https://pokeapi.co/api/v2/pokemon?offset=";
//       const page = 0;
//       const sufix = "&limit=10";

//       const expectedType = {};

//       window.fetch = mockFetch(mockData);

//       (async () => {
//         const data = (await getPokemons(
//           prefix,
//           page,
//           sufix,
//         )) as unknown as Record<string, unknown>;

//         expect(typeof data).toBe(typeof expectedType);
//       })();
//     });
//   });
// });
