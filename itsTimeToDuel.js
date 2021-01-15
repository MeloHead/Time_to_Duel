class Card{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, resil){
        super(name, cost)
        this.power = power
        this.resil = resil
    }

    // need to come up with this on my own....
    attack(target){
        console.log(target.name, "resilience is: ", target.resil)
        target.resil -= this.power 
        console.log(target.name, "Resilience after attack is: ", target.resil)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    // how did others figure this out on their own -_-
    play( target ) {
        if( target instanceof Unit ) {
            if (this.stat === "resilience"){
                target.resil += this.magnitude
            }
            if (this.stat === "power"){
                target.power += this.magnitude
            }

        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


//------------------------------------------------
//Unit
const redNinja = new Unit("Red Belt Ninjas",3, 3, 4)

const blackNinja = new Unit("Black Belt Ninjas", 4, 5, 4)

//--------------------------------------------------
// Effects

const HA = new Effect("Hard Algo", 2, "increase targets resilience by 3", "resilience", 3);
HA.play(redNinja);
console.log("redNinja resilience is:", redNinja.resil)

const UPR = new Effect("Unhandled Promise Rejection", 1, "reduce target resilience by 2", "resilience", -2)
UPR.play(redNinja)
console.log("redNinja resilience is:", redNinja.resil)

const PP = new Effect("Pair Programming", 3, "increases targets power by 2", "power", 2)
PP.play(redNinja)
console.log("redNinja power is:",redNinja.power)

redNinja.attack(blackNinja)


// const effect2 = new Effect("Unhandled Promise Rejection")
// const effect3 = new Effect("Pair Programming")