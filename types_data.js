// Pokemon Type Colors and Effectiveness Chart
window.TYPE_DATA = {
  normal: {
    nameKo: "노말",
    color: "#9FA19F",
    bgClass: "bg-gray-400",
    badgeClass: "bg-[#9FA19F] text-white",
    gradient: "from-stone-400 to-stone-500",
    border: "border-stone-400",
    weakTo: ["fighting"],
    resists: [],
    immuneTo: ["ghost"]
  },
  fire: {
    nameKo: "불꽃",
    color: "#E62829",
    bgClass: "bg-red-500",
    badgeClass: "bg-[#E62829] text-white",
    gradient: "from-orange-500 to-red-600",
    border: "border-red-400",
    weakTo: ["water", "ground", "rock"],
    resists: ["fire", "grass", "ice", "bug", "steel", "fairy"],
    immuneTo: []
  },
  water: {
    nameKo: "물",
    color: "#2980EF",
    bgClass: "bg-blue-500",
    badgeClass: "bg-[#2980EF] text-white",
    gradient: "from-blue-400 to-cyan-600",
    border: "border-blue-400",
    weakTo: ["electric", "grass"],
    resists: ["fire", "water", "ice", "steel"],
    immuneTo: []
  },
  grass: {
    nameKo: "풀",
    color: "#3FA129",
    bgClass: "bg-emerald-500",
    badgeClass: "bg-[#3FA129] text-white",
    gradient: "from-emerald-400 to-green-600",
    border: "border-emerald-400",
    weakTo: ["fire", "ice", "poison", "flying", "bug"],
    resists: ["water", "electric", "grass", "ground"],
    immuneTo: []
  },
  electric: {
    nameKo: "전기",
    color: "#FAC000",
    bgClass: "bg-amber-400",
    badgeClass: "bg-[#FAC000] text-gray-900 font-semibold",
    gradient: "from-yellow-400 to-amber-500",
    border: "border-amber-400",
    weakTo: ["ground"],
    resists: ["electric", "flying", "steel"],
    immuneTo: []
  },
  ice: {
    nameKo: "얼음",
    color: "#3DCEF3",
    bgClass: "bg-cyan-400",
    badgeClass: "bg-[#3DCEF3] text-gray-900 font-semibold",
    gradient: "from-cyan-300 to-teal-500",
    border: "border-cyan-400",
    weakTo: ["fire", "fighting", "rock", "steel"],
    resists: ["ice"],
    immuneTo: []
  },
  fighting: {
    nameKo: "격투",
    color: "#FF8000",
    bgClass: "bg-amber-600",
    badgeClass: "bg-[#FF8000] text-white",
    gradient: "from-amber-600 to-orange-700",
    border: "border-amber-600",
    weakTo: ["flying", "psychic", "fairy"],
    resists: ["bug", "rock", "dark"],
    immuneTo: []
  },
  poison: {
    nameKo: "독",
    color: "#9141CB",
    bgClass: "bg-purple-600",
    badgeClass: "bg-[#9141CB] text-white",
    gradient: "from-purple-500 to-indigo-700",
    border: "border-purple-500",
    weakTo: ["ground", "psychic"],
    resists: ["grass", "fighting", "poison", "bug", "fairy"],
    immuneTo: []
  },
  ground: {
    nameKo: "땅",
    color: "#915121",
    bgClass: "bg-yellow-700",
    badgeClass: "bg-[#915121] text-white",
    gradient: "from-amber-700 to-yellow-800",
    border: "border-amber-700",
    weakTo: ["water", "grass", "ice"],
    resists: ["poison", "rock"],
    immuneTo: ["electric"]
  },
  flying: {
    nameKo: "비행",
    color: "#81B9EF",
    bgClass: "bg-sky-400",
    badgeClass: "bg-[#81B9EF] text-gray-900 font-semibold",
    gradient: "from-sky-300 to-indigo-400",
    border: "border-sky-400",
    weakTo: ["electric", "ice", "rock"],
    resists: ["grass", "fighting", "bug"],
    immuneTo: ["ground"]
  },
  psychic: {
    nameKo: "에스퍼",
    color: "#EF4179",
    bgClass: "bg-pink-500",
    badgeClass: "bg-[#EF4179] text-white",
    gradient: "from-pink-500 to-rose-600",
    border: "border-pink-400",
    weakTo: ["bug", "ghost", "dark"],
    resists: ["fighting", "psychic"],
    immuneTo: []
  },
  bug: {
    nameKo: "벌레",
    color: "#91A119",
    bgClass: "bg-lime-600",
    badgeClass: "bg-[#91A119] text-white",
    gradient: "from-lime-500 to-emerald-600",
    border: "border-lime-500",
    weakTo: ["fire", "flying", "rock"],
    resists: ["grass", "fighting", "ground"],
    immuneTo: []
  },
  rock: {
    nameKo: "바위",
    color: "#AFA981",
    bgClass: "bg-amber-800",
    badgeClass: "bg-[#AFA981] text-white",
    gradient: "from-stone-500 to-amber-800",
    border: "border-stone-500",
    weakTo: ["water", "grass", "fighting", "ground", "steel"],
    resists: ["normal", "fire", "poison", "flying"],
    immuneTo: []
  },
  ghost: {
    nameKo: "고스트",
    color: "#704170",
    bgClass: "bg-indigo-900",
    badgeClass: "bg-[#704170] text-white",
    gradient: "from-purple-800 to-slate-900",
    border: "border-purple-700",
    weakTo: ["ghost", "dark"],
    resists: ["poison", "bug"],
    immuneTo: ["normal", "fighting"]
  },
  dragon: {
    nameKo: "드래곤",
    color: "#5060E1",
    bgClass: "bg-indigo-600",
    badgeClass: "bg-[#5060E1] text-white",
    gradient: "from-indigo-600 to-violet-800",
    border: "border-indigo-500",
    weakTo: ["ice", "dragon", "fairy"],
    resists: ["fire", "water", "electric", "grass"],
    immuneTo: []
  },
  steel: {
    nameKo: "강철",
    color: "#60A1B8",
    bgClass: "bg-slate-500",
    badgeClass: "bg-[#60A1B8] text-white",
    gradient: "from-slate-400 to-zinc-600",
    border: "border-slate-400",
    weakTo: ["fire", "fighting", "ground"],
    resists: ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"],
    immuneTo: ["poison"]
  },
  fairy: {
    nameKo: "페어리",
    color: "#EF70EF",
    bgClass: "bg-pink-400",
    badgeClass: "bg-[#EF70EF] text-white",
    gradient: "from-pink-400 to-rose-400",
    border: "border-pink-300",
    weakTo: ["poison", "steel"],
    resists: ["fighting", "bug", "dark"],
    immuneTo: ["dragon"]
  },
  dark: {
    nameKo: "악",
    color: "#50413F",
    bgClass: "bg-stone-800",
    badgeClass: "bg-[#50413F] text-white",
    gradient: "from-stone-700 to-stone-900",
    border: "border-stone-600",
    weakTo: ["fighting", "bug", "fairy"],
    resists: ["ghost", "dark"],
    immuneTo: ["psychic"]
  }
};

// Calculate defensive damage multiplier against a set of types
window.calculateEffectiveness = function(types) {
  const allTypes = Object.keys(window.TYPE_DATA);
  const multipliers = {};

  allTypes.forEach(attackingType => {
    let mult = 1.0;
    types.forEach(defType => {
      const data = window.TYPE_DATA[defType];
      if (!data) return;
      if (data.immuneTo && data.immuneTo.includes(attackingType)) {
        mult *= 0.0;
      } else if (data.weakTo && data.weakTo.includes(attackingType)) {
        mult *= 2.0;
      } else if (data.resists && data.resists.includes(attackingType)) {
        mult *= 0.5;
      }
    });
    multipliers[attackingType] = mult;
  });

  return multipliers;
};
