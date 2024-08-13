
class Character {
    name: string;
    healthPoints: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    constructor(name: string) {
        this.name = name;
        this.strength = this.getStat()
        this.dexterity = this.getStat()
        this.constitution = this.getStat()
        this.intelligence = this.getStat()
        this.wisdom = this.getStat()
        this.charisma = this.getStat()
        this.healthPoints = 10 + this.getConstitutionModifier();
    }

    rollDie(): number {
        return this.getRandomInt(6);
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }

    getStat(): number {
        let rolls: number[] = [this.rollDie(), this.rollDie(), this.rollDie(), this.rollDie()];
        // console.log(rolls);
        let smallest = 6;
        let sum = 0;
        rolls.forEach(e => {
            if (e < smallest) {
                smallest = e;
            }
            sum += e;
        });
        sum -= smallest;
        // console.log(sum);
        return sum;
    }

    getConstitutionModifier(): number {
        return Math.floor((this.constitution - 10) / 2);
    }
}


const char1 = new Character("Zoraal Ja");

console.log(char1);
