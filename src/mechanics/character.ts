import { IAbilityProvider } from "./providers";
import { Ability, IAbility } from "./ability";


export class Character implements IAbilityProvider {
    str: IAbility;
    dex: IAbility;
    con: IAbility;
    int: IAbility;
    wis: IAbility;
    cha: IAbility;

    constructor() {
        this.str = new Ability("Strength", 10);
        this.dex = new Ability("Dexterity", 10);
        this.con = new Ability("Constitution", 10);
        this.int = new Ability("Strength", 10);
        this.wis = new Ability("Strength", 10);
        this.cha = new Ability("Strength", 10);
    }
    getAbilities(): IAbility[] {
        return [this.str, this.dex, this.con, this.int, this.wis, this.cha];
    }
    getStr(): IAbility {
        return this.str;
    }
    getDex(): IAbility {
        return this.dex;
    }
    getCon(): IAbility {
        return this.con;
    }
    getInt(): IAbility {
        return this.int;
    }
    getWis(): IAbility {
        return this.wis;
    }
    getCha(): IAbility {
        return this.cha;
    }
}
