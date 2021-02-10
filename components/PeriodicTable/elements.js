const elements = [
    {
        s: "H",
        n: "1",
        Ar: "1,00794",
        oxs: [1],
        ru: "Водород",
        la: "Hydragenium",
        r: false,
        cls: "s other nonmetals",
    },
    {
        s: "He",
        n: "2",
        Ar: "2,0026",
        oxs: [0],
        ru: "Гелий",
        la: "Helium",
        r: false,
        cls: "s noble gas",
    },
    {
        s: "Li",
        n: "3",
        Ar: "6,941",
        oxs: [1],
        ru: "Литий",
        la: "Lithium",
        r: false,
        cls: "s alkaline metal",
    },
    {
        s: "Be",
        n: "4",
        Ar: "9,0122",
        oxs: [2],
        ru: "Бериллий",
        la: "Beryllium",
        r: false,
        cls: "s",
    },
    {
        s: "B",
        n: "5",
        Ar: "10,811",
        oxs: [3],
        ru: "Бор",
        la: "Borum",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "C",
        n: "6",
        Ar: "12,0107",
        oxs: [4],
        ru: "Углерод",
        la: "Carboneum",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "N",
        n: "7",
        Ar: "14,0067",
        oxs: [4],
        ru: "Азот",
        la: "Nitrogenium",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "O",
        n: "8",
        Ar: "15,9994",
        oxs: [-2],
        ru: "Кислород",
        la: "Oxygenium",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "F",
        n: "9",
        Ar: "18,9984",
        oxs: [-1],
        ru: "Фтор",
        la: "Fluorum",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "Ne",
        n: "10",
        Ar: "20,1797",
        oxs: [1],
        ru: "Неон",
        la: "Neon",
        r: false,
        cls: "p noble gas",
    },
    {
        s: "Na",
        n: "11",
        Ar: "22,9897",
        oxs: [1],
        ru: "Натрий",
        la: "Natrium",
        r: false,
        cls: "s alkaline metal",
    },
    {
        s: "Mg",
        n: "12",
        Ar: "24,305",
        oxs: [2],
        ru: "Магний",
        la: "Magnesium",
        r: false,
        cls: "s alkaline metal",
    },
    {
        s: "Al",
        n: "13",
        Ar: "26,9815",
        oxs: [3],
        ru: "Алюминий",
        la: "Aluminium",
        r: false,
        cls: "p",
    },
    {
        s: "Si",
        n: "14",
        Ar: "28,0855",
        oxs: [4],
        ru: "Кремний",
        la: "Silicium",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "P",
        n: "15",
        Ar: "30,9738",
        oxs: [5],
        ru: "Фосфор",
        la: "Phosphorus",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "S",
        n: "16",
        Ar: "32,066",
        oxs: [6],
        ru: "Сера",
        la: "Sulfur",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "Cl",
        n: "17",
        Ar: "35,45",
        oxs: [6],
        ru: "Хлор",
        la: "Chlorum",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "Ar",
        n: "18",
        Ar: "39,948",
        oxs: [0],
        ru: "Аргон",
        la: "Argon",
        r: false,
        cls: "p noble gas",
    },
    {
        s: "K",
        n: "19",
        Ar: "39,0983",
        oxs: [1],
        ru: "Калий",
        la: "Kalium",
        r: false,
        cls: "s alkaline metal",
    },
    {
        s: "Ca",
        n: "20",
        Ar: "40,078",
        oxs: [2],
        ru: "Кальций",
        la: "Calcium",
        r: false,
        cls: "s alkaline earth metals",
    },
    {
        s: "Sc",
        n: "21",
        Ar: "44,9559",
        oxs: [3],
        ru: "Скандий",
        la: "Scandium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Ti",
        n: "22",
        Ar: "47,867",
        oxs: [4],
        ru: "Титан",
        la: "Titanium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "V",
        n: "23",
        Ar: "50,9415",
        oxs: [5],
        ru: "Ванадий",
        la: "Vanadium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Cr",
        n: "24",
        Ar: "51,9961",
        oxs: [3],
        ru: "Хром",
        la: "Cromium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Mn",
        n: "25",
        Ar: "54,938",
        oxs: [2, 4],
        ru: "Марганец",
        la: "Manganum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Fe",
        n: "26",
        Ar: "55,845",
        oxs: [2, 3],
        ru: "Железо",
        la: "Ferrum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Co",
        n: "27",
        Ar: "58,9332",
        oxs: [2],
        ru: "Кобальт",
        la: "Cobaltum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Ni",
        n: "28",
        Ar: "58,6934",
        oxs: [2],
        ru: "Никель",
        la: "Niccolum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Cu",
        n: "29",
        Ar: "63,546",
        oxs: [2],
        ru: "Медь",
        la: "Cuprum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Zn",
        n: "30",
        Ar: "65,38",
        oxs: [2],
        ru: "Цинк",
        la: "Zincum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Ga",
        n: "31",
        Ar: "69,723",
        oxs: [3],
        ru: "Галлий",
        la: "Gallium",
        r: false,
        cls: "p",
    },
    {
        s: "Ge",
        n: "32",
        Ar: "72,63",
        oxs: [4],
        ru: "Германий",
        la: "Germanium",
        r: false,
        cls: "p",
    },
    {
        s: "As",
        n: "33",
        Ar: "74,9216",
        oxs: [3],
        ru: "Мышьяк",
        la: "Arsenicum",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "Se",
        n: "34",
        Ar: "78,96",
        oxs: [4],
        ru: "Селен",
        la: "Selenium",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "Br",
        n: "35",
        Ar: "79,904",
        oxs: [-1],
        ru: "Бром",
        la: "Bromum",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "Kr",
        n: "36",
        Ar: "83,798",
        oxs: [2],
        ru: "Криптон",
        la: "Krypton",
        r: false,
        cls: "p noble gas",
    },
    {
        s: "Rb",
        n: "37",
        Ar: "85,4678",
        oxs: [1],
        ru: "Рубидий",
        la: "Rubidium",
        r: false,
        cls: "s alkaline metal",
    },
    {
        s: "Sr",
        n: "38",
        Ar: "87,62",
        oxs: [2],
        ru: "Стронций",
        la: "Strontium",
        r: false,
        cls: "s alkaline earth metals",
    },
    {
        s: "Y",
        n: "39",
        Ar: "88,9059",
        oxs: [3],
        ru: "Иттрий",
        la: "Yttrium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Zr",
        n: "40",
        Ar: "91,224",
        oxs: [4],
        ru: "Цирконий",
        la: "Zirconium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Nb",
        n: "41",
        Ar: "92,9064",
        oxs: [5],
        ru: "Ниобий",
        la: "Niobium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Mo",
        n: "42",
        Ar: "95,96",
        oxs: [6],
        ru: "Молибден",
        la: "Molybdaenum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Tc",
        n: "43",
        Ar: "97,907",
        oxs: [7],
        ru: "Технеций",
        la: "Technetium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Ru",
        n: "44",
        Ar: "101,07",
        oxs: [4],
        ru: "Рутений",
        la: "Ruthenium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Rh",
        n: "45",
        Ar: "102,9055",
        oxs: [3],
        ru: "Родий",
        la: "Rhodium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Pd",
        n: "46",
        Ar: "106,42",
        oxs: [2],
        ru: "Палладий",
        la: "Palladium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Ag",
        n: "47",
        Ar: "107,8682",
        oxs: [1],
        ru: "Серебро",
        la: "Argentum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Cd",
        n: "48",
        Ar: "112,411",
        oxs: [2],
        ru: "Кадмий",
        la: "Cadmium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "In",
        n: "49",
        Ar: "114,818",
        oxs: [3],
        ru: "Индий",
        la: "Indium",
        r: false,
        cls: "p",
    },
    {
        s: "Sn",
        n: "50",
        Ar: "118,71",
        oxs: [4],
        ru: "Олово",
        la: "Stannum",
        r: false,
        cls: "p",
    },
    {
        s: "Sb",
        n: "51",
        Ar: "121,76",
        oxs: [3],
        ru: "Сурьма",
        la: "Stibium",
        r: false,
        cls: "p",
    },
    {
        s: "Te",
        n: "52",
        Ar: "127,6",
        oxs: [4],
        ru: "Теллур",
        la: "Tellurium",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "I",
        n: "53",
        Ar: "126,9045",
        oxs: [-1],
        ru: "Йод",
        la: "Iodum",
        r: false,
        cls: "p other nonmetals",
    },
    {
        s: "Xe",
        n: "54",
        Ar: "131,29",
        oxs: [6],
        ru: "Ксенон",
        la: "Xenon",
        r: false,
        cls: "p noble gas",
    },
    {
        s: "Cs",
        n: "55",
        Ar: "132,9055",
        oxs: [1],
        ru: "Цезий",
        la: "Caesium",
        r: false,
        cls: "s alkaline metal",
    },
    {
        s: "Ba",
        n: "56",
        Ar: "137,327",
        oxs: [2],
        ru: "Барий",
        la: "Barium",
        r: false,
        cls: "s alkaline earth metals",
    },
    {
        s: "La",
        n: "57",
        Ar: "138,9055",
        oxs: [3],
        ru: "Лантан",
        la: "Lanthanum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Ce",
        n: "58",
        Ar: "140,116",
        oxs: [3],
        ru: "Церий",
        la: "Cerium",
        r: false,
        cls: "f-top lanthanide",
    },
    {
        s: "Pr",
        n: "59",
        Ar: "140,9077",
        oxs: [3],
        ru: "Празеодим",
        la: "Praseodymium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Nd",
        n: "60",
        Ar: "144,24",
        oxs: [3],
        ru: "Неодим",
        la: "Neodymium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Pm",
        n: "61",
        Ar: "[145]",
        oxs: [3],
        ru: "Прометий",
        la: "Promethium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Sm",
        n: "62",
        Ar: "150,36",
        oxs: [3],
        ru: "Самарий",
        la: "Samarium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Eu",
        n: "63",
        Ar: "151,964",
        oxs: [3],
        ru: "Европий",
        la: "Europium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Gd",
        n: "64",
        Ar: "157,25",
        oxs: [3],
        ru: "Гадолиний",
        la: "Gadolinium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Tb",
        n: "65",
        Ar: "158,9253",
        oxs: [3],
        ru: "Тербий",
        la: "Terbium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Dy",
        n: "66",
        Ar: "162,5",
        oxs: [3],
        ru: "Диспрозий",
        la: "Dysprosium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Ho",
        n: "67",
        Ar: "164,9303",
        oxs: [3],
        ru: "Гольмий",
        la: "Holmium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Er",
        n: "68",
        Ar: "167,26",
        oxs: [3],
        ru: "Эрбий",
        la: "Erbium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Tm",
        n: "69",
        Ar: "168,9342",
        oxs: [3],
        ru: "Тулий",
        la: "Thulium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Yb",
        n: "70",
        Ar: "173,045",
        oxs: [3],
        ru: "Иттербий",
        la: "Ytterbium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Lu",
        n: "71",
        Ar: "174,967",
        oxs: [3],
        ru: "Лютеций",
        la: "Lutetium",
        r: false,
        cls: "f-top lanthanides",
    },
    {
        s: "Hf",
        n: "72",
        Ar: "178,49",
        oxs: [4],
        ru: "Гафний",
        la: "Hafnium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Ta",
        n: "73",
        Ar: "180,9479",
        oxs: [5],
        ru: "Тантал",
        la: "Tantalum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "W",
        n: "74",
        Ar: "183,84",
        oxs: [6],
        ru: "Вольфрам",
        la: "Wolframium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Re",
        n: "75",
        Ar: "186,207",
        oxs: [7],
        ru: "Рений",
        la: "Rhenium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Os",
        n: "76",
        Ar: "190,23",
        oxs: [8, 4],
        ru: "Осмий",
        la: "Osmium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Ir",
        n: "77",
        Ar: "192,217",
        oxs: [3, 4],
        ru: "Иридий",
        la: "Iridium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Pt",
        n: "78",
        Ar: "195,084",
        oxs: [2, 4],
        ru: "Платина",
        la: "Platinum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Au",
        n: "79",
        Ar: "196,966",
        oxs: [3],
        ru: "Золото",
        la: "Aurum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Hg",
        n: "80",
        Ar: "200,59",
        oxs: [2],
        ru: "Ртуть",
        la: "Hydrargyrum",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Tl",
        n: "81",
        Ar: "204,3833",
        oxs: [1],
        ru: "Таллий",
        la: "Thallium",
        r: false,
        cls: "p",
    },
    {
        s: "Pb",
        n: "82",
        Ar: "207,2",
        oxs: [2],
        ru: "Свинец",
        la: "Plumbum",
        r: false,
        cls: "p",
    },
    {
        s: "Bi",
        n: "83",
        Ar: "208,9804",
        oxs: [3],
        ru: "Висмут",
        la: "Bismuthum",
        r: true,
        cls: "p",
    },
    {
        s: "Po",
        n: "84",
        Ar: "208,98",
        oxs: [4],
        ru: "Полоний",
        la: "Polonium",
        r: true,
        cls: "p",
    },
    {
        s: "At",
        n: "85",
        Ar: "[210]",
        oxs: [4],
        ru: "Астат",
        la: "Astatium",
        r: true,
        cls: "p other nonmetals",
    },
    {
        s: "Rn",
        n: "86",
        Ar: "[222]",
        oxs: [2],
        ru: "Радон",
        la: "Radon",
        r: true,
        cls: "p noble gas",
    },
    {
        s: "Fr",
        n: "87",
        Ar: "[223]",
        oxs: [1],
        ru: "Франций",
        la: "Francium",
        r: true,
        cls: "s alkaline metal",
    },
    {
        s: "Ra",
        n: "88",
        Ar: "226,025",
        oxs: [2],
        ru: "Радий",
        la: "Radium",
        r: true,
        cls: "s alkaline earth metals",
    },
    {
        s: "Ac",
        n: "89",
        Ar: "227,0278",
        oxs: [3],
        ru: "Актиний",
        la: "Actinium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Th",
        n: "90",
        Ar: "232,038",
        oxs: [4],
        ru: "Торий",
        la: "Thorium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Pa",
        n: "91",
        Ar: "231,036",
        oxs: [5],
        ru: "Протактиний",
        la: "Protactinium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "U",
        n: "92",
        Ar: "238,029",
        oxs: [6],
        ru: "Уран",
        la: "Uranium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Np",
        n: "93",
        Ar: "237,048",
        oxs: [5],
        ru: "Нептуний",
        la: "Neptunium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Pu",
        n: "94",
        Ar: "[244]",
        oxs: [3, 4],
        ru: "Плутоний",
        la: "Plutonium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Am",
        n: "95",
        Ar: "[243]",
        oxs: [3],
        ru: "Америций",
        la: "Americium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Cm",
        n: "96",
        Ar: "[247]",
        oxs: [3],
        ru: "Кюрий",
        la: "Curium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Bk",
        n: "97",
        Ar: "[247]",
        oxs: [3],
        ru: "Берклий",
        la: "Berkelium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Cf",
        n: "98",
        Ar: "[251]",
        oxs: [3],
        ru: "Калифорний",
        la: "Californium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Es",
        n: "99",
        Ar: "[252]",
        oxs: [3],
        ru: "Эйнштейний",
        la: "Einsteinium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Fm",
        n: "100",
        Ar: "[257]",
        oxs: [3],
        ru: "Фермий",
        la: "Fermium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Md",
        n: "101",
        Ar: "[258]",
        oxs: [3],
        ru: "Менделевий",
        la: "Mendelevium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "No",
        n: "102",
        Ar: "[259]",
        oxs: [2],
        ru: "Нобелий",
        la: "Nobelium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Lr",
        n: "103",
        Ar: "[260]",
        oxs: [3],
        ru: "Лоуренсий",
        la: "Lawrencium",
        r: true,
        cls: "f-bottom actinides",
    },
    {
        s: "Rf",
        n: "104",
        Ar: "[261]",
        oxs: [],
        ru: "Резерфордий",
        la: "Rutherfordium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Db",
        n: "105",
        Ar: "[262]",
        oxs: [],
        ru: "Дубний",
        la: "Dubnium",
        r: false,
        cls: "d transition metals",
    },
    {
        s: "Sg",
        n: "106",
        Ar: "[263]",
        oxs: [],
        ru: "Сиборгий",
        la: "Seaborgium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Bh",
        n: "107",
        Ar: "[267]",
        oxs: [],
        ru: "Борий",
        la: "Bohrium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Hs",
        n: "108",
        Ar: "[269]",
        oxs: [],
        ru: "Хассий",
        la: "Hassium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Mt",
        n: "109",
        Ar: "[278]",
        oxs: [],
        ru: "Мейтнерий",
        la: "Meitnerium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Ds",
        n: "110",
        Ar: "[281]",
        oxs: [],
        ru: "Дармштадтий",
        la: "Darmstadtium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Rg",
        n: "111",
        Ar: "[281]",
        oxs: [],
        ru: "Рентгений",
        la: "Roentgenium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Cn",
        n: "112",
        Ar: "[262]",
        oxs: [],
        ru: "Коперниций",
        la: "Copernicium",
        r: true,
        cls: "d transition metals",
    },
    {
        s: "Nh",
        n: "113",
        Ar: "[283]",
        oxs: [],
        ru: "Нихоний",
        la: "Nihonium",
        r: true,
        cls: "p",
    },
    {
        s: "Fl",
        n: "114",
        Ar: "[289]",
        oxs: [],
        ru: "Флеровий",
        la: "Flerovium",
        r: true,
        cls: "p",
    },
    {
        s: "Mc",
        n: "115",
        Ar: "[289]",
        oxs: [],
        ru: "Московий",
        la: "Moscovium",
        r: true,
        cls: "p",
    },
    {
        s: "Lv",
        n: "116",
        Ar: "[293]",
        oxs: [],
        ru: "Ливерморий",
        la: "Livermorium",
        r: true,
        cls: "p",
    },
    {
        s: "Ts",
        n: "117",
        Ar: "[294]",
        oxs: [],
        ru: "Теннессин",
        la: "Tennessine",
        r: true,
        cls: "p",
    },
    {
        s: "Og",
        n: "118",
        Ar: "[294]",
        oxs: [0],
        ru: "Оганесон",
        la: "Oganesson",
        r: true,
        cls: "p",
    },
];

export default elements;