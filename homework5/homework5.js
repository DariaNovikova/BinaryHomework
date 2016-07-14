class Fighter {

    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        if (damage <= this.health) {
            this.health -= damage;
            return console.log(`${this.name} has ${this.health} health left`);
        }

        this.health = 0;
    }

    isDead(){
        return this.health === 0;
    }

    hit(enemy, point = 1) {
        if (point < 0) {
            return console.log(`${point} is not valid number. Expected greater than zero`);
        }
        enemy.setDamage(point * this.power);
    }
}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point = 1) {
        super.hit(enemy, 2 * point);
    }
}

let fighter = new Fighter("Ivan", 30, 200);
let improvedFighter = new ImprovedFighter("Peter", 20, 200);

let fight = (fighter, improvedFighter, ...points) => {
    if (points.length === 0) {
        fighter.hit(improvedFighter);
        improvedFighter.doubleHit(fighter);
    } else {

        for (let i = 0; i < points.length; i++) {
            fighter.hit(improvedFighter, points[i]);
            if (fighter.isDead())
                return console.log(`${improvedFighter.name} has won`);
            improvedFighter.doubleHit(fighter, points[i]);
            if (improvedFighter.isDead())
                return console.log(`${fighter.name} has won`);
        }
    }
};

fight(fighter, improvedFighter, 3, 3, 5, 6);

