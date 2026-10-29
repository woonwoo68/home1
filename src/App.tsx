import React, { useState, useEffect, useMemo } from 'react';
import { Pokemon } from './types/pokemon';
import { TYPE_DATA, calculateEffectiveness } from './data/typeData';

// If window.POKEMON_DATA is loaded globally, use it, else fallback
declare global {
  interface Window {
    POKEMON_DATA?: Pokemon[];
  }
}

export default function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("id-asc");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [showTeamDrawer, setShowTeamDrawer] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"artwork" | "animated">("artwork");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // LocalStorage for Favorites
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("poke_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // LocalStorage for Team (up to 6 pokemon)
  const [myTeam, setMyTeam] = useState<Pokemon[]>(() => {
    try {
      const saved = localStorage.getItem("poke_team");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (window.POKEMON_DATA && window.POKEMON_DATA.length > 0) {
      setPokemonList(window.POKEMON_DATA);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const toggleFavorite = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(x => x !== id) : [...prev, id];
      showToast(exists ? "즐겨찾기에서 제외되었습니다." : "즐겨찾기에 등록되었습니다! ❤️");
      return next;
    });
  };

  const addToTeam = (pokemon: Pokemon, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (myTeam.some(p => p.id === pokemon.id)) {
      setMyTeam(prev => prev.filter(p => p.id !== pokemon.id));
      showToast(`${pokemon.name}을(를) 팀에서 제외했습니다.`);
    } else {
      if (myTeam.length >= 6) {
        showToast("팀은 최대 6마리까지만 구성할 수 있습니다! ⚠️");
        return;
      }
      setMyTeam(prev => [...prev, pokemon]);
      showToast(`${pokemon.name}이(가) 파티에 합류했습니다! ⚡`);
    }
  };

  const playCry = (pokemon: Pokemon) => {
    if (!pokemon) return;
    const audio = new Audio(pokemon.cry);
    audio.volume = 0.6;
    audio.play().catch(() => {
      const fallbackAudio = new Audio(pokemon.cryFallback);
      fallbackAudio.volume = 0.6;
      fallbackAudio.play().catch(() => {});
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <header className="max-w-7xl mx-auto flex items-center justify-between py-4 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-rose-500">포켓몬 도감 (Vite + React)</h1>
        <div className="text-sm text-slate-400">
          파티: <span className="text-white font-bold">{myTeam.length}/6</span> | 
          즐겨찾기: <span className="text-white font-bold">{favorites.length}</span>
        </div>
      </header>
      <main className="max-w-7xl mx-auto mt-6">
        <p className="text-slate-400">포켓몬 1세대 151마리 공식 도감 앱입니다. 자세한 실행 화면은 <code className="text-rose-400 font-mono">index.html</code>을 열어 확인하실 수 있습니다.</p>
      </main>
    </div>
  );
}
