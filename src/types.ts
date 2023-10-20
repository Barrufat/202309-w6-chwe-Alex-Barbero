export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

// Export interface Pokemon {
//   abilities: [];
//   base_experience: number;
//   forms: [];
//   game_indices: [];
//   height: 20;
//   held_items: [];
//   id: 3;
//   is_default: boolean;
//   location_area_encounters: string;
//   moves: [];
//   name: string;
//   order: number;
//   past_abilities: [];
//   past_types: [];
//   species: Record<string, unknown>;
//   sprites: Record<string, unknown>;
//   stats: [];
//   types: [];
//   weight: 1000;
// }
