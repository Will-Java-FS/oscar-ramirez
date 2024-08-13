"use strict";
class Character {
    constructor(name) {
        this.name = name;
        this.strength = this.getStat();
        this.dexterity = this.getStat();
        this.constitution = this.getStat();
        this.intelligence = this.getStat();
        this.wisdom = this.getStat();
        this.charisma = this.getStat();
        this.healthPoints = 10 + this.getConstitutionModifier();
    }
    rollDie() {
        return this.getRandomInt(6);
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    getStat() {
        let rolls = [this.rollDie(), this.rollDie(), this.rollDie(), this.rollDie()];
        let smallest = 6;
        let sum = 0;
        rolls.forEach(e => {
            if (e < smallest) {
                smallest = e;
            }
            sum += e;
        });
        sum -= smallest;
        return sum;
    }
    getConstitutionModifier() {
        return Math.floor((this.constitution - 10) / 2);
    }
}
const char1 = new Character("Zoraal Ja");
console.log(char1);
