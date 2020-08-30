import {
    StrAbility as Str, DexAbility as Dex,
    IntAbility as Int, WisAbility as Wis, ChaAbility as Cha,
    IAbilityType, getAbilityScore
} from "./ability";
import { ICharacter } from "./character";


export interface ISkill {
    name: string;
    abilityType: IAbilityType;
    getMod(character: ICharacter): number;
}

export class Skill {
    constructor(public readonly name: string, public readonly abilityType: IAbilityType) {
    }

    getMod(character: ICharacter): number {
        return getAbilityScore(character, this.abilityType).mod + (character.proficientSkills.has(this) ? character.proficiencyBonus : 0);
    }
}

export const AcrobaticsSkill = new Skill("Acrobatics", Dex);
export const AnimalHandlingSkill = new Skill("Animal Handling", Wis);
export const ArcanaSkill = new Skill("Arcana", Int);
export const AthleticsSkill = new Skill("Athletics", Str);
export const DeceptionSkill = new Skill("Deception", Cha);
export const HistorySkill = new Skill("History", Int);
export const InsightSkill = new Skill("Insight", Wis);
export const IntimidationSkill = new Skill("Intimidation", Cha);
export const InvestigationSkill = new Skill("Investigation", Int);
export const MedicineSkill = new Skill("Medicine", Wis);
export const NatureSkill = new Skill("Nature", Int);
export const PerceptionSkill = new Skill("Perception", Wis);
export const PerformanceSkill = new Skill("Performance", Cha);
export const PersuasionSkill = new Skill("Persuasion", Cha);
export const ReligionSkill = new Skill("Religion", Int);
export const SleightOfHandSkill = new Skill("Sleight of Hand", Dex);
export const StealthSkill = new Skill("Stealth", Dex);
export const SurvivalSkill = new Skill("Survival", Wis);

export const AllSkills = [
    AcrobaticsSkill, AnimalHandlingSkill, ArcanaSkill, AthleticsSkill, DeceptionSkill, HistorySkill,
    InsightSkill, IntimidationSkill, InvestigationSkill, MedicineSkill, NatureSkill, PerceptionSkill,
    PerformanceSkill, PersuasionSkill, ReligionSkill, SleightOfHandSkill, StealthSkill, SurvivalSkill
];