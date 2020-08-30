import {
    AbilityScore, IAbilityScore, IAbilityScoreProvider,
    StrAbility, DexAbility, ConAbility, IntAbility, WisAbility, ChaAbility, IAbilityType, getAbilityScore
} from "./ability";
import { ISkill } from "./skill";


export interface ICharacter extends IAbilityScoreProvider {
    proficiencyBonus: number;
    proficientSkills: Set<ISkill>;
}

export class Character implements ICharacter {

    str: IAbilityScore;
    dex: IAbilityScore;
    con: IAbilityScore;
    int: IAbilityScore;
    wis: IAbilityScore;
    cha: IAbilityScore;

    proficiencyBonus: number;
    proficientSkills: Set<ISkill>;

    constructor() {
        this.str = new AbilityScore(StrAbility, 10);
        this.dex = new AbilityScore(DexAbility, 10);
        this.con = new AbilityScore(ConAbility, 10);
        this.int = new AbilityScore(IntAbility, 10);
        this.wis = new AbilityScore(WisAbility, 10);
        this.cha = new AbilityScore(ChaAbility, 10);

        this.proficiencyBonus = 0;
        this.proficientSkills = new Set();
    }

    getSkillMod(skill: ISkill): number {
        return skill.getMod(this);
    }
}
