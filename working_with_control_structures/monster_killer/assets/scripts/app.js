let chosenMaxLife = 100;
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
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

attackBtn.addEventListener('click', attackHandler);