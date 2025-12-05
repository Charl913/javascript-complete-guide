let chosenMaxLife = 100;
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
    let maxDamage;
    if(mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    }
    else {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    const playerDamange = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentMonsterHealth -= damage;
    currentPlayerHealth -= playerDamange;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw');
    }
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);