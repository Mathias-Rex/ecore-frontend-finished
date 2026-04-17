const db = {
  spacecrafts: [
    {
      id: 1,
      type: 'research',
      name: 'Archaeological Surveyor AS-8',
      category: 'Régészeti kutatóhajó',
      tagline: 'Űrprobák és archeobotanikai minták teljes körű feldolgozása',
      description: {
        overview:
          'Az AS-8 tele van multidiszciplináris laborokkal, kimondottan régészeti feltárásokhoz és ősi technológiák dekódolásához. Építették úgy, hogy képes legyen kinyerni és stabilizálni a legérzékenyebb relicségeket.',
        additional:
          'Felszerelései lehetővé teszik a live holografikus dokumentációt és az automatikus 3D-modellezést.',
        applications:
          'Ideális a kolonizált világok ősi romjainak feltárására, valamint tudományos és kulturális expedíciók támogatására.',
      },
      features: [
        'Telemetriai és kultúrális adatfelismerés',
        'Automatikus mintapreparációs labor',
        'Orbitalis dokumentáló drónok',
        'AR alapú térképészet',
        'Sugárzás és biológiai elemzés',
        'Zárt clean-room',
      ],
      specs: {
        performance: {
          maxSpeed: '0.30c',
          acceleration: '2.1 G',
          range: '55 fényév',
          energy: 'Plasma synergy + quantum condenser',
        },
        lab: {
          laboratory: '4 holografikus + 2 steril kamra',
          scanner: 'Multi-spectral relic detector',
          documentation: 'AR + quantum imaging',
          data: 'Exabyte vault',
        },
        crew: {
          crew: '35 kutató és művész',
          autonomy: '4 év folyamatos küldetés',
          comfort: 'Living dome + med bay',
          security: 'Radiation shield + anti-corrosion shell',
        },
        dimensions: {
          length: '200 méter',
          width: '70 méter',
          height: '45 méter',
          emptyMass: '5200 tonna',
        },
      },
      pricing: {
        price: '90.000.000 CR',
        availability: 'Exkluzív rendelések, 6 hét szállítás',
      },
      image: '/assets/images/archaeological-surveyor-as8.jpg',
    },
    {
      id: 2,
      type: 'mining',
      name: 'Asteroid Miner AM-5',
      category: 'Precíziós aszteroida bányász',
      tagline: 'Célzott kitermelés és automatikus feldolgozás egy fedélzeten',
      description: {
        overview:
          'Az AM-5 a bányászati flotta agya: fejlett lézeres fúrócsúcsok, in-situ finomítók és szerkezeti erősítők tartják fent a folyamatos kitermelést extrém körülmények között.',
        additional:
          'Helyspecifikus útvonaltervezéssel és adaptív hűtéssel kifejezetten ritkaföldfémekhez és kriogén kristályokhoz optimalizálták.',
        applications:
          'Kisebb aszteroidák és távoli objektumok kitermelésére, valamint gyorsan mozgó bányászcsapatok támogatására.',
      },
      features: [
        'AI-célzású fúrófejek és vibrációs stabilizálás',
        'Orbitális adatkapcsolat + valós idejű telemetria',
        'Moduláris bála- és szállítórendszer',
        'Kriogén-elismerő hűtésval',
        'Törés térfigyelő és önjavító kompozit',
        'Komplett logisztikai automatikus portál',
      ],
      specs: {
        performance: {
          maxSpeed: '0.12c',
          acceleration: '2.0 G',
          range: '28 fényév',
          engine: 'Dual-ion + graviton lift',
        },
        mining: {
          extraction: '500 tonna/nap',
          processing: '98% hatékonyságú onboard finomítás',
          chamber: '3000 m³ moduláris konténerek',
          dock: '2 konvoj + 1 automata töltőállomás',
        },
        crew: {
          crew: '10 fő',
          security: 'Sugaras védőpajzs + hullámfólia fedélzet',
          comfort: 'Automatikus rezonancia csillapítás',
          communication: 'Quantum relay + Mesh',
        },
        dimensions: {
          length: '150 méter',
          width: '54 méter',
          height: '38 méter',
          emptyMass: '3100 tonna',
        },
      },
      pricing: {
        price: '71.000.000 CR',
        availability: 'Elérhető, 2 hónap tesztelt kiszállítás',
      },
      image: '/assets/images/asteroid-miner-am5.jpg',
    },
    {
      id: 3,
      type: 'commercial',
      name: 'Bulk Transport BT-15',
      category: 'Óriási rakományhajó',
      tagline: 'Csatatereken és kereskedelmi útvonalakon a legnagyobb tonnával',
      description: {
        overview:
          'A BT-15 a Bulk Transport sorozat zászlóshajója, amely 15.000 m³-nyi rakományt mozgat két nap alatt.',
        additional:
          'Az integrált dokkoló modulok és a mesterséges intelligencia-alapú logisztikai agy lehetővé teszi a folyamatos feltöltést.',
        applications: 'Óriás konzorciumok használják nyersanyag- és ellátási lánc operációkhoz.',
      },
      features: [
        'Titan Composite páncélzat a korai szemtanúk ellen',
        'Automaták dokkolási asszisztencia',
        'Öngerjesztő hő- és tömegkiegyenlítő rendszerek',
        'Moduláris terhelőkamra és áramlásvezérlés',
        'Térségi logisztikai IA és navigációs biztonság',
        'Adaptív energiaháló a hajtóművek között',
      ],
      specs: {
        performance: {
          maxSpeed: '0.10c',
          acceleration: '1.8 G',
          range: '45 fényév',
          engine: 'Gravitációs csepp és ion tandem',
        },
        cargo: {
          space: '15.000 m³',
          maxLoad: '25.000 tonna',
          special: 'Hasadóanyag + kriogén tér',
          docking: '6 standard + 3 nagy',
        },
        crew: {
          crew: '12 fő',
          autonomy: '120 nap (készenléti üzem)',
          controller: 'AI Fleet BRAIN',
          comfort: 'Runtime kabinetek + üzemanyagtisztító',
        },
        dimensions: {
          length: '210 méter',
          width: '92 méter',
          height: '48 méter',
          emptyMass: '5200 tonna',
        },
      },
      pricing: {
        price: '97.500.000 CR',
        availability: '4 hónap gyártás + teszt',
      },
      image: '/assets/images/bulk-transport-bt15.jpg',
    },
    {
      id: 4,
      type: 'commercial',
      name: 'Cargo Hauler MK-3',
      category: 'Kereskedelmi Teherhajó',
      tagline: 'A galaxis legmegbízhatóbb áruszállító űrhajója',
      description: {
        overview: 'A Cargo Hauler MK-3 az E-CORE kereskedelmi flottájának zászlóshajója.',
        additional: 'A MK-3 modell a korábbi generációk minden tanulságát magában foglalja.',
        applications:
          'Ideális választás kereskedelmi flották számára, akik rendszeres, nagy mennyiségű áruszállítást végeznek.',
      },
      features: [
        'Nagy kapacitású rakománytér optimalizált elrendezéssel',
        'Kvantum-hajtómű a gyors és hatékony utazáshoz',
        'Megerősített védőpajzsok és páncélzat',
        'Automatizált rakodási rendszer',
        'Fejlett kommunikációs és nyomkövetési rendszerek',
        'Környezetbarát ion-hajtóművek',
      ],
      specs: {
        performance: {
          maxSpeed: '0.15c',
          acceleration: '2.5 G',
          range: '50 fényév',
          fuel: 'Deutérium plazmacellák',
        },
        cargo: {
          space: '5000 m³',
          maxLoad: '8500 tonna',
          type: 'Moduláris, hőszabályozott',
          docking: '4 standard + 2 nagy méretű',
        },
        crew: {
          crew: '8 fő',
          cabins: '6 + 2 tiszti',
          lifeSupport: '90 nap autonómia',
          common: 'Menza, pihenő, edzőterem',
        },
        dimensions: {
          length: '185 méter',
          width: '68 méter',
          height: '42 méter',
          emptyMass: '4200 tonna',
        },
      },
      pricing: {
        price: '85.000.000 CR',
        availability: 'Rendelésre azonnal elérhető',
      },
      image: '/assets/images/cargo-hauler-mk3.jpg',
    },
    {
      id: 5,
      type: 'battleship',
      name: 'Carrier Fortress CF-3',
      category: 'Űrhordozó',
      tagline: 'Mobil repülőgép-hordozó fedélzet a flották élére',
      description: {
        overview:
          'A CF-3 az E-CORE parancsnoki hajója, több mint 120 vadászgéppel és támogató drónnal rendelkezik.',
        additional:
          'Modularitása és AI felügyelete biztosítja, hogy gyorsan tud reagálni a támadásokra.',
        applications: 'Flottaparancsnokok és támadó csapatok számára.',
      },
      features: [
        '120+ vadászgép hangárkapacitás',
        'Hyperion parancsnoki torony',
        'Körbefutó gravitációs pajzs',
        'Hálózati koordináció és logisztika',
        'Moduláris csomagok a logisztikához',
        'Energiatároló szektorok',
      ],
      specs: {
        performance: {
          maxSpeed: '0.18c',
          acceleration: '1.9 G',
          range: '60 fényév',
          engine: 'Duo ion + fusion core',
        },
        capacity: {
          hangar: '120 vadászgép + 40 drón',
          logistics: '5 moduláris szállító',
          docking: '10 multiport docking',
          warehouse: '9000 tonna',
        },
        crew: {
          crew: '2500 fő',
          commander: 'AI Fleet Brain + human admiral',
          operations: 'Quantum link + fleet mesh',
          support: 'Med bay + repair docks',
        },
        dimensions: {
          length: '360 méter',
          width: '120 méter',
          height: '70 méter',
          emptyMass: '12,000 tonna',
        },
      },
      pricing: {
        price: '220.000.000 CR',
        availability: 'Temető parancsnokság előrendelés, 7 hónap',
      },
      image: '/assets/images/carrier-fortress-cf3.jpg',
    },
    {
      id: 6,
      type: 'battleship',
      name: 'Corvette Guardian CG-15',
      category: 'Könnyű fregatt',
      tagline: 'Gyors reagálás, precíz védelmi képesség',
      description: {
        overview:
          'A Guardian CG-15 kompakt könnyű fregatt, amely optimális választás konvojvédelemhez és felderítő missziókhoz.',
        additional:
          'AI-navigáció és adaptív páncél kombinációja biztosítja, hogy az ellenséges láthatóság minimális.',
        applications: 'Ideális könnyű fregatt csapatszállító és konvojkísérő feladatokra.',
      },
      features: [
        'Multispektrum rakéták és lézertorony',
        'Quick-response AI vezérlés',
        'Adaptive shield mesh',
        'Sensor-link a flottával',
        'Drone hangyaflottás támogatás',
        'Rapid maneuver boost',
      ],
      specs: {
        performance: {
          maxSpeed: '0.35c',
          acceleration: '4.0 G',
          range: '30 fényév',
          engine: 'Plasma-sprint + ion stabilizátor',
        },
        armament: {
          lasers: '2x medium burning lasers',
          missiles: '3x vectored rockets',
          drones: '6 intercept drones',
          attack: 'EMP pulse + railgun',
        },
        crew: {
          crew: '25 fő',
          ai: 'Guardian OS + threat prediction',
          defense: 'Energy shield + hull regen',
          communication: 'Fleet mesh + quantum link',
        },
        dimensions: {
          length: '110 méter',
          width: '48 méter',
          height: '20 méter',
          emptyMass: '950 tonna',
        },
      },
      pricing: {
        price: '68.000.000 CR',
        availability: 'Pilotált átadás 3 hónapon belül',
      },
      image: '/assets/images/corvette-guardian-cg15.jpg',
    },
  ],
};

export default db;
