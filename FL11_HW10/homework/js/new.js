class Fighter {
    constructor(settings) {
    let wins = 0;
    let loses = 0;
    let max = 100;
    this.getName = () => settings.name;
    this.getDamage = () => settings.damage;
    this.getHealth = () => settings.hp;
    this.getAgility = () => settings.agility;
    if(settings.agility > max) {
        settings.agility = max;
    } else if(settings.agility < 0) {
        settings.agility = 0
    }
    this.logCombatHistory = () => 
    console.log(`Name: ${settings.name}, Wins: ${wins}, Losses: ${loses}`);
    this.addWin = () => wins++;
    this.addLoss = () => loses++;
    this.heal = (num) => {
        if(settings.hp + num > max) {
            settings.hp = max;
        } else {
            settings.hp + num;
        }
    }
    this.dealDamage = (num) => {
            if(settings.hp - num < 0) {
                settings.hp = 0
            } else {
                settings.hp -= num;
            }
        }
    this.attack = (obj2) => {
        let random = Math.floor(Math.random() * (max - 0 + 1)) + 0;
        if(random > this.getAgility()) {
            obj2.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${obj2.getName()}`);
        } else {
            console.log(`${this.getName()} attacked missed`);
            }
        }
    }
}
function battle(obj1,obj2) {
    if(obj1.getHealth() === 0){
        console.log(`${obj1.getName()} is dead and can't fight.`);
    } else if(obj2.getHealth() === 0){
        console.log(`${obj2.getName()} is dead and can't fight.`);
    } else {
        let first = true;
        while(obj2.getHealth() !== 0 && obj1.getHealth() !== 0) {
            if(first) {
                obj1.attack(obj2);
                first = false;
                console.log(obj1.getHealth(),obj2.getHealth());
            }else {
                obj2.attack(obj1);
                first = true;
                console.log(obj1.getHealth(),obj2.getHealth());
            }
        }
        if(obj1.getHealth() === 0) {
            obj2.addWin();
            obj1.addLoss();
            alert(`${obj2.getName()} is winner.Congratulations!!!!`);
        } else {
            obj1.addWin();
            obj2.addLoss();
            alert(`${obj1.getName()} is winner.Congratulations!!!!`);
        }
    }
}