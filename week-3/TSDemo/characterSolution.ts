class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;

    constructor() {
        this.strength = this.generateAbilityScore();
        this.dexterity = this.generateAbilityScore();
        this.constitution = this.generateAbilityScore();
        this.intelligence = this.generateAbilityScore();
        this.wisdom = this.generateAbilityScore();
        this.charisma = this.generateAbilityScore();
        this.hitpoints = 10 + this.getModifier(this.constitution);
    }

    generateAbilityScore(): number {
        
        const rolls: number[] = [...Array(4)].map(_ => this.generateRandomDiceRollScore());

        //sorts our dice rolls in order form greatest to smallest, drops the lowest number, and adds the rest together
        return rolls.sort((a, b) => a - b).slice(0, 3).reduce((n, sum) => sum + n)
    }

    generateRandomDiceRollScore(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    getModifier(numberValue: number) : number {
        return Math.floor((numberValue - 10) / 2);
    }
}


const wizard =  new DnDCharacter();
console.log(wizard);