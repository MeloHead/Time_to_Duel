class Ninja{
    constructor(name, health=100, speed=3, strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(`your ninja is ${this.name}`);
    }
    showStats() {
        console.log(`${this.name} stats are: \n health = ${this.health}, \n speed = ${this.speed}, \n strength = ${this.strength}`)
    }
    drinkSake(){
        this.health += 10
        return `you drank sake adding +10 to your health! \nyour health is now ${this.health}\n`
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom
    }

    showStats() {
        console.log(`${this.name} stats are: \n health = ${this.health}, \n speed = ${this.speed}, \n strength = ${this.strength}, \n wisdom = ${this.wisdom}\n`)
    }

    speakWisdom(){
        const callingSake = super.drinkSake();
        console.log(callingSake)
    }

    drinkRum(){
        this.health -= 10
        console.log(`drinking with your student -10 to your health! \n your health is now ${this.health}`)
    }
}

// const ninja1 = new Ninja ("Naruto")
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

const superSensei = new Sensei("Kakashi")
superSensei.showStats();
superSensei.speakWisdom();
// superSensei.drinkRum();