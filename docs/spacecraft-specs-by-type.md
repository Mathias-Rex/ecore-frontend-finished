# Űrhajó specifikációk típusonként

Ez a dokumentum leírja, hogy mely specifikációs mezők mely űrhajó típusokra jellemzők.

## Kereskedelmi (commercial)

| Mező | Leírás |
|------|-------|
| `cargo.space` | Rakománytér mérete (m³) |
| `cargo.maxLoad` | Maximális terhelés (tonna) |
| `cargo.type` | Rakomány típusa |
| `cargo.docking` | Dokkolási lehetőségek |

**plusz:**
| Mező | Leírás |
|------|-------|
| `capacity.passengers` | Utasszám |
| `capacity.luxuryCabins` | Prémium kabinok száma |
| `capacity.conference` | Konferencia termek |
| `capacity.cabin` | Kabin konfiguráció |
| `capacity.cargo` | Rakomány kapacitás |

---

## Bányászat (mining)

| Mező | Leírás |
|------|-------|
| `mining.extraction` | Kitermelési kapacitás |
| `mining.processing` | Feldolgozási hatékonyság |
| `mining.chamber` | Kamra méret |
| `mining.dock` | Dokkolási lehetőségek |

**plusz:**
| Mező | Leírás |
|------|-------|
| `extraction.extraction` | Kitermelés |
| `extraction.coolingCapacity` | Hűtési kapacitás |
| `extraction.system` | Rendszer típus |
| `extraction.waterExtraction` | Víz kitermelés |
| `extraction.depth` | Fúrási mélység |
| `extraction.extract` | Kitermelési arány |
| `extraction.stabilizers` | Stabilizátorok |
| `extraction.capacity` | Feldolgozási kapacitás |
| `extraction.refinement` | Finomítási tisztaság |
| `extraction.output` | Kimenet |
| `extraction.gasExtraction` | Gáz kitermelés |
| `extraction.storage` | Tároló kapacitás |
| `extraction.chambers` | Kamrák száma |
| `processing.capacity` | Feldolgozási kapacitás |
| `processing.refinement` | Finomítás |
| `processing.output` | Kimenet |
| `processing.dock` | Dokkolás |
| `sensors.scanning` | Szkenner hatótávolság |
| `sensors.detection` | Érzékelés típusa |
| `sensors.communication` | Kommunikáció |
| `sensors.endurance` | Üzemidő |
| `system.emergency` | Vészkezelés |
| `system.sensor` | Érzékelő típus |
| `system.management` | Felügyelet |

---

## Harcászat (battleship)

| Mező | Leírás |
|------|-------|
| `armament.lasers` | Lézerek |
| `armament.missiles` | Rakéták |
| `armament.drones` | Drónok |
| `armament.attack` | Támadó fegyverzet |

**plusz:**
| Mező | Leírás |
|------|-------|
| `capacity.hangar` | Hangár kapacitás |
| `capacity.logistics` | Logisztikai kapacitás |
| `capacity.docking` | Dokkolás |
| `capacity.warehouse` | Raktár |
| `capabilities.armament` | Fegyverzet |
| `capabilities.coOp` | Együttműködés |
| `capabilities.drones` | Drónok |
| `capabilities.docking` | Dokkolás |
| `armament.railgun` | Railgun |
| `armament.torpedoes` | Torpedó launcherek |
| `armament.laser` | Lézer |
| `armament.missionSupport` | Küldetés támogatás |
| `armament.aggressivePack` | Agreszív csomag |
| `armament.support` | Támogatás |

---

## Kutatás (research)

| Mező | Leírás |
|------|-------|
| `lab.laboratory` | Laboratórium |
| `lab.scanner` | Szkenner |
| `lab.documentation` | Dokumentáció |
| `lab.data` | Adattárolás |

**plusz:**
| Mező | Leírás |
|------|-------|
| `observatory.telescope` | Teleszkóp |
| `observatory.sensors` | Érzékelők |
| `observatory.lab` | Laborok |
| `observatory.data` | Adat |
| `research.lab` | Kutatólabor |
| `research.sensor` | Érzékelő |
| `research.data` | Adat |
| `research.relay` | Relé |
| `mapping.resolution` | Felbontás |
| `mapping.atmosphere` | Légkör |
| `mapping.scanners` | Szkennerek |
| `mapping.density` | Mintavétel sűrűség |

---

## Összes típusra jellemző közös mezők

| Mező | Leírás |
|------|-------|
| `performance.maxSpeed` | Maximális sebesség |
| `performance.acceleration` | Gyorsulás |
| `performance.range` | Hatótávolság |
| `performance.engine` / `performance.fuel` / `performance.energy` / `performance.stabilization` | Hajtómű/energia |
| `crew.crew` | Személyzet |
| `crew.autonomy` / `crew.comfort` / `crew.security` / `crew.communication` | Személyzet jellemzők |
| `dimensions.length` | Hossz |
| `dimensions.width` | Szélesség |
| `dimensions.height` | Magasság |
| `dimensions.emptyMass` | Üres tömeg |
| `pricing.price` | Ár |
| `pricing.availability` | Elérhetőség |