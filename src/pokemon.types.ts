export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_stats: PastStat[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species | null;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  order: null;
  version_group: Species;
}

export interface PastAbility {
  abilities: Ability[];
  generation: Species;
}

export interface PastStat {
  generation: Species;
  stats: Stat[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Other {
  "official-artwork": OfficialArtwork;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Type {
  slot: number;
  type: Species;
}
