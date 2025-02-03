const investmentData = {
  renewables: [
    {
      parametri: {
        prezzo: 25,
        energia: 8,
        co2: -10,
        consenso: -4,
      },
      titolo: "Green Infrastructure Development",
      immagine: "map1",

      opzioni: [
        {
          nome: "Onshore",
          corretto: false,
        },
        {
          nome: "Run-of-River",
          corretto: false,
        },
        {
          nome: "Dry Steam",
          corretto: false,
        },
        {
          nome: "Concentrated",
          corretto: true,
        },
        {
          nome: "Pumped-Storage",
          corretto: false,
        },
        {
          nome: "Binary Cycle",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 30,
        energia: 10,
        co2: -12,
        consenso: -5,
      },
      titolo: "Renewable Energy Solutions",
      immagine: "map2",

      opzioni: [
        {
          nome: "Offshore",
          corretto: true,
        },
        {
          nome: "Reservoir",
          corretto: false,
        },
        {
          nome: "Flash Steam",
          corretto: false,
        },
        {
          nome: "Floating",
          corretto: false,
        },
        {
          nome: "Binary Cycle",
          corretto: false,
        },
        {
          nome: "Photovoltaic",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 35,
        energia: 12,
        co2: -15,
        consenso: -2,
      },
      titolo: "Clean Energy Expansion Plan",
      immagine: "map3",

      opzioni: [
        {
          nome: "Floating",
          corretto: false,
        },
        {
          nome: "Dry Steam",
          corretto: false,
        },
        {
          nome: "Concentrated",
          corretto: false,
        },
        {
          nome: "Distributed",
          corretto: false,
        },
        {
          nome: "Reservoir",
          corretto: true,
        },
        {
          nome: "Flash Steam",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 20,
        energia: 6,
        co2: -8,
        consenso: -3,
      },
      titolo: "New Renewable Site",
      immagine: "map4",

      opzioni: [
        {
          nome: "Floating",
          corretto: true,
        },
        {
          nome: "Binary Cycle",
          corretto: false,
        },
        {
          nome: "Run-of-River",
          corretto: false,
        },
        {
          nome: "Reservoir",
          corretto: false,
        },
        {
          nome: "Flash Steam",
          corretto: false,
        },
        {
          nome: "Offshore",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 35,
        energia: 9,
        co2: -12,
        consenso: -6,
      },
      titolo: "Low-Carbon Power Site",
      immagine: "map5",

      opzioni: [
        {
          nome: "Distributed",
          corretto: false,
        },
        {
          nome: "Floating",
          corretto: false,
        },
        {
          nome: "Binary Cycle",
          corretto: true,
        },
        {
          nome: "Onshore",
          corretto: false,
        },
        {
          nome: "Concentrated",
          corretto: false,
        },
        {
          nome: "Dry Steam",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 20,
        energia: 5,
        co2: -10,
        consenso: -4,
      },
      titolo: "Sustainable Energy Grid Upgrade",
      immagine: "map6",

      opzioni: [
        {
          nome: "Flash Steam",
          corretto: false,
        },
        {
          nome: "Distributed",
          corretto: false,
        },
        {
          nome: "Photovoltaic",
          corretto: false,
        },
        {
          nome: "Floating",
          corretto: false,
        },
        {
          nome: "Concentrated",
          corretto: false,
        },
        {
          nome: "Onshore",
          corretto: true,
        },
      ],
    },
  ],
  fossil: [
    {
      parametri: {
        prezzo: 12,
        energia: 10,
        co2: 12,
        consenso: 3,
      },
      titolo: "Fossil Fuel Imports Program",
      resource: "oil",

      opzioni: [
        {
          bandiera: "paltrosia",
          stato: 1,
          corretto: true,
        },
        {
          bandiera: "krythara",
          stato: 0,
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 20,
        energia: 11,
        co2: 16,
        consenso: 5,
      },
      titolo: "Oil For Transportation",
      resource: "oil",

      opzioni: [
        {
          bandiera: "calbrana",
          stato: 0,
          corretto: false,
        },
        {
          bandiera: "loredania",
          stato: 1,
          corretto: true,
        },
      ],
    },
    {
      parametri: {
        prezzo: 15,
        energia: 8,
        co2: 10,
        consenso: 5,
      },
      titolo: "Lowering The Heating Bills",
      resource: "gas",

      opzioni: [
        {
          bandiera: "calbrana",
          stato: 1,
          corretto: true,
        },
        {
          bandiera: "krythara",
          stato: 1,
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 18,
        energia: 9,
        co2: 14,
        consenso: 3,
      },
      titolo: "Gas Import Terminals",
      resource: "gas",

      opzioni: [
        {
          bandiera: "paltrosia",
          stato: 0,
          corretto: false,
        },
        {
          bandiera: "loredania",
          stato: 0,
          corretto: true,
        },
      ],
    },
  ],
  nuclear: [
    {
      parametri: {
        prezzo: 30,
        energia: 10,
        co2: 5,
        consenso: -8,
      },
      titolo: "Energy Facility Development Plan",
      code: "1",
      opzioni: [
        {
          nome: "Feasibility Analysis",
          abbreviazione: "FEA. ANA.",
        },
        {
          nome: "Regulatory Compliance",
          abbreviazione: "REG. COM.",
        },
        {
          nome: "Location Evaluation",
          abbreviazione: "LOC. EVA.",
        },
        {
          nome: "Site Approval",
          abbreviazione: "SIT. APP.",
        },
        {
          nome: "Community Engagement",
          abbreviazione: "COM. ENG.",
        },
        {
          nome: "Environmental Assessment",
          abbreviazione: "ENV. ASS.",
        },
      ],
      risposta: [0, 5, 1, 4, 2, 3],
    },
    {
      parametri: {
        prezzo: 40,
        energia: 15,
        co2: -25,
        consenso: -12,
      },
      titolo: "Clean Power Expansion Project",
      code: "2",
      opzioni: [
        {
          nome: "Foundation Development",
          abbreviazione: "FOU. DEV.",
        },
        {
          nome: "Reactor Installation",
          abbreviazione: "REA. INS.",
        },
        {
          nome: "Infrastructure Assembly",
          abbreviazione: "INF. ASS.",
        },
        {
          nome: "Grid Connection",
          abbreviazione: "GRI. CON.",
        },
        {
          nome: "Quality Inspection",
          abbreviazione: "QUA. INS.",
        },
        {
          nome: "Site Preparation",
          abbreviazione: "SIT. PRE.",
        },
      ],
      risposta: [5, 0, 2, 1, 3, 4],
    },
    {
      parametri: {
        prezzo: 35,
        energia: 9,
        co2: -10,
        consenso: -7,
      },
      titolo: "Energy Development Program",
      code: "3",
      opzioni: [
        {
          nome: "Safety Simulation",
          abbreviazione: "SAF. SIM.",
        },
        {
          nome: "Regulatory Approval",
          abbreviazione: "REG. APP.",
        },
        {
          nome: "Certification",
          abbreviazione: "CER.",
        },
        {
          nome: "System Calibration",
          abbreviazione: "SYS. CAL.",
        },
        {
          nome: "Operational Trials",
          abbreviazione: "OPE. TRI.",
        },
        {
          nome: "Performance Monitoring",
          abbreviazione: "PER. MON.",
        },
      ],
      risposta: [3, 0, 4, 1, 5, 2],
    },
    {
      parametri: {
        prezzo: 40,
        energia: 11,
        co2: -8,
        consenso: -5,
      },
      titolo: "Grid Connection Improvements",
      code: "4",
      opzioni: [
        {
          nome: "Equipment Servicing",
          abbreviazione: "EQU. SER.",
        },
        {
          nome: "Component Replacement",
          abbreviazione: "COM. REP.",
        },
        {
          nome: "Routine Inspections",
          abbreviazione: "ROU. INS.",
        },
        {
          nome: "Structural Integrity Check",
          abbreviazione: "STR. INT. CHE.",
        },
        {
          nome: "Downtime Coordination",
          abbreviazione: "DOW. COO.",
        },
        {
          nome: "Software Updates",
          abbreviazione: "SOF. UPT.",
        },
      ],
      risposta: [2, 1, 0, 3, 5, 4],
    },
    {
      parametri: {
        prezzo: 30,
        energia: 7,
        co2: -15,
        consenso: -13,
      },
      titolo: "Advanced Energy Solutions",
      code: "5",
      opzioni: [
        {
          nome: "Transportation Planning",
          abbreviazione: "TRA. PLA.",
        },
        {
          nome: "Cooling Pool Storage",
          abbreviazione: "COO. POO. STO.",
        },
        {
          nome: "Radiation Monitoring",
          abbreviazione: "RAD. MON.",
        },
        {
          nome: "Long-Term Storage",
          abbreviazione: "LON. STO.",
        },
        {
          nome: "Spent Fuel Removal ",
          abbreviazione: "SPE. FUE. REM.",
        },
        {
          nome: "Compliance Documentation",
          abbreviazione: "COM. DOC.",
        },
      ],
      risposta: [4, 1, 0, 3, 2, 5],
    },
    {
      parametri: {
        prezzo: 25,
        energia: 10,
        co2: -5,
        consenso: -8,
      },
      titolo: "New Nuclear Power Site",
      code: "6",
      opzioni: [
        {
          nome: "Performance Evaluation",
          abbreviazione: "PER. EVA.",
        },
        {
          nome: "Simulation Drills",
          abbreviazione: "SIM. DRI.",
        },
        {
          nome: "Safety Protocols",
          abbreviazione: "SAF. PRO.",
        },
        {
          nome: "Continuous Education",
          abbreviazione: "CON. EDU.",
        },
        {
          nome: "Certification Renewal",
          abbreviazione: "CER. REN.",
        },
        {
          nome: "Technical Knowledge",
          abbreviazione: "TEC. KNO.",
        },
      ],
      risposta: [2, 5, 1, 0, 3, 4],
    },
  ],
  approval: [
    {
      parametri: {
        prezzo: 15,
        energia: 0,
        co2: 0,
        consenso: 16,
      },
      titolo: "Navigating The Energy Transition",
      archetipo: "ecologist",

      media: [
        {
          nome: "Newspaper Article",
          corretto: true,
        },
        {
          nome: "Live Events",
          corretto: true,
        },
        {
          nome: "TV Commercial",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 10,
        energia: 0,
        co2: 0,
        consenso: 11,
      },
      titolo: "Bridging The Public awareness Gap",
      archetipo: "traditionalist",

      media: [
        {
          nome: "Application",
          corretto: false,
        },
        {
          nome: "Outdoor Campaign",
          corretto: true,
        },
        {
          nome: "Partnership",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 12,
        energia: 0,
        co2: 0,
        consenso: 10,
      },
      titolo: "Digital Platforms for Energy Literacy",
      archetipo: "energyInfluencer",

      media: [
        {
          nome: "Application",
          corretto: false,
        },
        {
          nome: "Social Media",
          corretto: true,
        },
        {
          nome: "Videogame",
          corretto: true,
        },
      ],
    },
    {
      parametri: {
        prezzo: 11,
        energia: 0,
        co2: 0,
        consenso: 13,
      },
      titolo: "Expanding The General Knowledge",
      archetipo: "curiousLearner",

      media: [
        {
          nome: "Application",
          corretto: true,
        },
        {
          nome: "TV Commercial",
          corretto: false,
        },
        {
          nome: "Outdoor Campaign",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 12,
        energia: 0,
        co2: 0,
        consenso: 15,
      },
      titolo: "Empowering Collective Action",
      archetipo: "passiveObserver",

      media: [
        {
          nome: "Interview",
          corretto: false,
        },
        {
          nome: "Video Game",
          corretto: false,
        },
        {
          nome: "Outdoor Campaign",
          corretto: true,
        },
      ],
    },
    {
      parametri: {
        prezzo: 10,
        energia: 0,
        co2: 0,
        consenso: 9,
      },
      titolo: "Investing in Next Voters ",
      archetipo: "innovationEnthusiast",

      media: [
        {
          nome: "Partnership",
          corretto: true,
        },
        {
          nome: "Live Events",
          corretto: false,
        },
        {
          nome: "Application",
          corretto: true,
        },
      ],
    },
  ],
  grid: [
    {
      parametri: {
        prezzo: 20,
        energia: 0,
        co2: -10,
        consenso: 5,
      },
      titolo: "Electrification Program",
      opzioni: [
        {
          scienziato: "electrification",
          frase: "Electrifying homes reduces reliance on fossil fuels",
          corretto: true,
        },
        {
          scienziato: "grid",
          frase: "The path to decarbonization starts with an electric grid",
          corretto: false,
        },
        {
          scienziato: "building",
          frase: "Rural electrification sparks economic growth and innovation",
          corretto: false,
        },
        {
          scienziato: "transport",
          frase: "Switching to electric cooking slashes indoor pollution",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 20,
        energia: 0,
        co2: -12,
        consenso: 15,
      },
      titolo: "Affordable Electric Transport",
      opzioni: [
        {
          scienziato: "storage",
          frase: "Hydrogen fuels offer a viable path for long-distance trucking",
          corretto: false,
        },
        {
          scienziato: "electrification",
          frase: "The future of aviation might lie in electric or hybrid planes",
          corretto: false,
        },
        {
          scienziato: "transport",
          frase: "Electrified rail systems move millions with minimal emissions",
          corretto: true,
        },
        {
          scienziato: "grid",
          frase: "Electrifying scooters enhances sustainable city mobility",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 25,
        energia: 0,
        co2: -12,
        consenso: 15,
      },
      titolo: "Buildings Emission Reduction",
      opzioni: [
        {
          scienziato: "grid",
          frase: "Optimizing lighting systems cuts energy waste dramatically",
          corretto: false,
        },
        {
          scienziato: "building",
          frase: "Net-zero buildings redefine modern architecture",
          corretto: true,
        },
        {
          scienziato: "electrification",
          frase: "Green roofs insulate buildings and cool cities naturally",
          corretto: false,
        },
        {
          scienziato: "storage",
          frase: "Integrated building systems create energy self-sufficiency",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 30,
        energia: 0,
        co2: -18,
        consenso: 12,
      },
      titolo: "Energy Storage System",
      opzioni: [
        {
          scienziato: "transport",
          frase: "Thermal storage captures and reuses industrial heat",
          corretto: false,
        },
        {
          scienziato: "grid",
          frase: "Seasonal energy storage ensures power year-round",
          corretto: false,
        },
        {
          scienziato: "storage",
          frase: "Energy storage is the backbone of renewable reliability",
          corretto: true,
        },
        {
          scienziato: "building",
          frase: "Advanced battery recycling reduces resource dependency",
          corretto: false,
        },
      ],
    },
    {
      parametri: {
        prezzo: 35,
        energia: 0,
        co2: -15,
        consenso: 10,
      },
      titolo: "High Capacity Power Lines",
      opzioni: [
        {
          scienziato: "grid",
          frase: "Investing in grid flexibility supports unpredictable renewable sources",
          corretto: true,
        },
        {
          scienziato: "building",
          frase: "Dynamic pricing on smart grids rewards energy-efficient behavior",
          corretto: false,
        },
        {
          scienziato: "electrification",
          frase: "Smart grids enable microgeneration, making every home a power plant",
          corretto: false,
        },
        {
          scienziato: "transport",
          frase: "Digital grids ensure renewable energy reaches its full potential",
          corretto: false,
        },
      ],
    },
  ],
};
