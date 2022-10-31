import {
    AbilityScore,
    ChaAbility, ConAbility, DexAbility,
    IntAbility, StrAbility, WisAbility
} from "./ability";
import { Skill } from "./skill";


export interface ICharacter {
    str: AbilityScore;
    dex: AbilityScore;
    con: AbilityScore;
    int: AbilityScore;
    wis: AbilityScore;
    cha: AbilityScore;
    proficiencyBonus: number;
    proficientSkills: Skill[];
}

export class Character implements ICharacter {

    str: AbilityScore;
    dex: AbilityScore;
    con: AbilityScore;
    int: AbilityScore;
    wis: AbilityScore;
    cha: AbilityScore;

    proficiencyBonus: number;
    proficientSkills: Skill[];

    constructor() {
        this.str = new AbilityScore(StrAbility, 10);
        this.dex = new AbilityScore(DexAbility, 10);
        this.con = new AbilityScore(ConAbility, 10);
        this.int = new AbilityScore(IntAbility, 10);
        this.wis = new AbilityScore(WisAbility, 10);
        this.cha = new AbilityScore(ChaAbility, 10);

        this.proficiencyBonus = 0;
        this.proficientSkills = [];
    }

    getSkillMod(skill: Skill): number {
        return skill.getMod(this);
    }
}
