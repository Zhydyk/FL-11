/* Your code goes here */

class Fighter{
    constructor(fighterProperties){
        let wins = 0;
        let losses = 0;
        let maxHealth = fighterProperties.hp;

        this.getName = () => fighterProperties.name;
        this.getDamage = () => fighterProperties.damage;
        this.getHealth = () => fighterProperties.hp; 
        this.getAgility = () => fighterProperties.agility;

        this.attack = (fighter) => {
            let percent = 100
            let random = Math.floor(Math.random() * 101);
            let successAttack = percent - fighter.getAgility();
            if(random < successAttack){
                fighter.dealDamage(this.getDamage());
                console.log(`${this.getName()} make ${fighter.getDamage()} damage to ${fighter.getName()}`);
            }else{
                console.log(`${fighter.getName()} attack missed`);
            }
        }

        this.logCombatHistory = () => {
            console.log(`Name: ${fighterProperties.name}, Wins: ${wins}, Losses: ${losses} `);
        }

        this.heal = (hp) => {
            if(hp < maxHealth && hp + fighterProperties.hp <= maxHealth) {
                fighterProperties.hp += hp;
            }else if(hp > maxHealth ){
                fighterProperties.hp = maxHealth;
            }
        }

        this.dealDamage = (damage) => {
            if(fighterProperties.hp - damage < 0){
                fighterProperties.hp = 0;
            }else {
                fighterProperties.hp -= damage;
            }
        }

        this.addWins = () => wins++ ;
        this.addLoss = () => losses++ ;
    }
}
function battle(fighter1, fighter2){
    if(fighter1.getHealth() === 0){
        console.log(`${fighter1.getName()} is dead and can't fight!`);
    }else if(fighter2.getHealth() === 0){
        console.log(`${fighter2.getName()} is dead and can't fight!`);
    }
    while(fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0){
        fighter1.attack(fighter2);
        if(fighter1.getHealth() === 0){
            fighter2.addWins();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} is winner! Congratulation!!!`);
            return;
        } 
        fighter2.attack(fighter1);
        if(fighter2.getHealth() === 0){
            fighter1.addWins();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} is winner! Congratulation!!!`);
            return;
        }
    }
}
