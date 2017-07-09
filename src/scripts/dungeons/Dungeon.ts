///<reference path="DungeonBossPokemon.ts"/>

/**
 * Gym class.
 */
class Dungeon {

    name: KnockoutObservable<string> = ko.observable("");
    pokemonList: string[];
    baseHealth: number;
    bossList: DungeonBossPokemon[];
    tokenCost: number;
    badgeReq: GameConstants.Badge;
    itemRoute: number;
    level: number;


    constructor(dungeonName: string, pokemonList: string[], baseHealth: number, bossList: DungeonBossPokemon[], tokenCost: number, badgeReq: GameConstants.Badge, itemRoute: number, level: number) {
        this.name = ko.observable(dungeonName);
        this.pokemonList = pokemonList;
        this.baseHealth = baseHealth;
        this.bossList = bossList;
        this.tokenCost = tokenCost;
        this.badgeReq = badgeReq;
        this.itemRoute = itemRoute;
        this.level = level;
    }


    public isUnlocked(): boolean {
        return player.hasBadge(this.badgeReq);
    }
}

/**
 * Data list that contains all dungeons, accessible by name.
 */

// TODO add all dungeons
const dungeonList: {[dungeonName: string]: Dungeon} = {};
dungeonList["Viridian Forest"] = new Dungeon(
    "Viridian Forest",
    ["Caterpie", "Metapod", "Weedle", "Kakuna", "Pidgey", "Pidgeotto"],
    12,
    [new DungeonBossPokemon("Pikachu", 510, 7)],
    50,
    GameConstants.Badge.None,
    1,
    5);


