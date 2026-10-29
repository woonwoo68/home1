export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
}

export interface Pokemon {
  id: number;
  name: string;
  nameEn: string;
  types: string[];
  typesKo: string[];
  genus: string;
  height: number;
  weight: number;
  stats: PokemonStats;
  totalStats: number;
  desc: string;
  evolution: number[];
  sprite: string;
  artwork: string;
  animated: string;
  cry: string;
  cryFallback: string;
}

export interface TypeDetail {
  nameKo: string;
  color: string;
  bgClass: string;
  badgeClass: string;
  gradient: string;
  border: string;
  weakTo: string[];
  resists: string[];
  immuneTo: string[];
}
