const questions = [
    { text: "Augmenter les impôts ?", money: 1, army: 0, agriculture: -1, love: 0, health: 0 },
    { text: "Renforcer l'armée ?", money: 0, army: 2, agriculture: 0, love: -1, health: 0 },
    { text: "Aider les fermiers ?", money: -1, army: 0, agriculture: 3, love: 1, health: 0 },
    { text: "Construire un hôpital ?", money: -2, army: 0, agriculture: 0, love: 0, health: 2 },
    { text: "Réduire les dépenses militaires ?", money: 2, army: -2, agriculture: 0, love: 0, health: 0 },
    { text: "Vacciner la population ?", money: -3, army: 0, agriculture: 0, love: 0, health: 3 },
    { text: "Récolte abondante, partager avec les autres villages ?", money: -2, army: 0, agriculture: 2, love: 2, health: 0 },
    { text: "Augmenter les taxes des commerçants ?", money: 3, army: 0, agriculture: -2, love: -1, health: 0 },
    { text: "Construire un système d'irrigation ?", money: -2, army: 0, agriculture: 3, love: 0, health: 2 },
    { text: "Réduire les impôts pour encourager le commerce ?", money: -2, army: 0, agriculture: 0, love: 2, health: 0 },
    { text: "Améliorer les routes ?", money: -3, army: 0, agriculture: 1, love: 2, health: 0 },
    { text: "Financer l’éducation ?", money: -3, army: 0, agriculture: 0, love: 2, health: 0 },
    { text: "Interdire la chasse ?", money: 0, army: 0, agriculture: 0, love: 1, health: 1 },
    { text: "Réduire le salaire des soldats ?", money: 2, army: -1, agriculture: 0, love: 0, health: 0 },
    { text: "Augmenter les pensions ?", money: -2, army: 0, agriculture: 0, love: 3, health: 1 },
    { text: "Aider les régions touchées par une sécheresse ?", money: -3, army: 0, agriculture: 2, love: 1, health: 0 },
    { text: "Construire une bibliothèque ?", money: -1, army: 0, agriculture: 0, love: 2, health: 0 },
    { text: "Augmenter les taxes sur les produits de luxe ?", money: 2, army: 0, agriculture: 0, love: -1, health: 0 },
    { text: "Réduire les subventions agricoles ?", money: 1, army: 0, agriculture: -3, love: -1, health: 0 },
    { text: "Distribuer des terres aux fermiers ?", money: -2, army: 0, agriculture: 3, love: 1, health: 0 },
    { text: "Construire un mur pour protéger les frontières ?", money: -3, army: 3, agriculture: 0, love: -2, health: 0 },
    { text: "Investir dans les énergies renouvelables ?", money: -3, army: 0, agriculture: 2, love: 2, health: 2 },
    { text: "Offrir une prime aux soldats ?", money: -2, army: 2, agriculture: 0, love: -1, health: 0 },
    { text: "Interdire les pratiques agricoles néfastes ?", money: -1, army: 0, agriculture: 2, love: 1, health: 1 },
    { text: "Financer des infrastructures médicales ?", money: -3, army: 0, agriculture: 0, love: 0, health: 3 },
    { text: "Organiser des jeux dans l'arène ?", money: -1, army: 2, agriculture: 0, love: -2, health: 0 },
    { text: "Autoriser la pêche industrielle ?", money: 2, army: 0, agriculture: -1, love: -1, health: -1 },
    { text: "Rendre l'éducation gratuite ?", money: -4, army: 0, agriculture: 0, love: 3, health: 0 },
    { text: "Construire une nouvelle caserne ?", money: -2, army: 3, agriculture: 0, love: -1, health: 0 },
    { text: "Réduire les taxes sur les produits de base ?", money: -3, army: 0, agriculture: 0, love: 2, health: 0 },
    { text: "Créer un système de santé gratuit ?", money: -4, army: 0, agriculture: 0, love: 2, health: 4 },
    { text: "Nationaliser les industries importantes ?", money: -2, army: 0, agriculture: 1, love: 0, health: 0 },
    { text: "Autoriser les cultes religieux ?", money: 0, army: 0, agriculture: 0, love: 2, health: 1 },
    { text: "Promouvoir le tourisme ?", money: 2, army: 0, agriculture: 1, love: 1, health: 0 },
    { text: "Imposer des quotas sur les ressources naturelles ?", money: -1, army: 0, agriculture: 2, love: -1, health: 1 },
    { text: "Offrir des terres aux nobles ?", money: 0, army: 0, agriculture: -2, love: -2, health: 0 },
    { text: "Imposer des restrictions sur l'immigration ?", money: 1, army: 1, agriculture: 0, love: -1, health: 0 },
    { text: "Subventionner les énergies fossiles ?", money: 3, army: 0, agriculture: -2, love: -2, health: -3 },
    { text: "Interdire l'usage des pesticides ?", money: -2, army: 0, agriculture: 2, love: 0, health: 2 },
    { text: "Taxer les produits importés ?", money: 3, army: 0, agriculture: 0, love: -1, health: 0 },
    { text: "Améliorer les conditions de travail ?", money: -3, army: 0, agriculture: 0, love: 2, health: 1 },
    { text: "Réduire les salaires des ministres ?", money: 2, army: 0, agriculture: 0, love: 2, health: 0 },
    { text: "Investir dans la recherche agricole ?", money: -2, army: 0, agriculture: 3, love: 0, health: 1 },
    { text: "Relever l'âge de la retraite ?", money: 3, army: 0, agriculture: 0, love: -2, health: -1 },
    { text: "Imposer des sanctions commerciales ?", money: 2, army: 0, agriculture: -2, love: -1, health: 0 },
    { text: "Établir un réseau ferroviaire ?", money: -3, army: 0, agriculture: 2, love: 1, health: 0 },
    { text: "Réformer la justice ?", money: -2, army: 0, agriculture: 0, love: 2, health: 1 },
    { text: "Développer un programme de formation pour les jeunes ?", money: -2, army: 0, agriculture: 0, love: 3, health: 1 },
    { text: "Augmenter les impôts des grandes entreprises ?", money: 3, army: 0, agriculture: 0, love: 0, health: 1 },
    { text: "Interdire l'exploitation forestière ?", money: -2, army: 0, agriculture: 1, love: 1, health: 2 }
];

let currentQuestionIndex = 0;
let decisions = [];
let scores = { money: 0, army: 0, agriculture: 0, love: 0, health: 0 };

const card = document.getElementById('card');
const questionElement = document.getElementById('question');
const decisionsList = document.getElementById('decisions-list');
const recapElement = document.getElementById('recap');
const gameElement = document.getElementById('game');
const resultsElement = document.getElementById('results');

// Progress bars
const moneyBar = document.getElementById('money-bar');
const armyBar = document.getElementById('army-bar');
const agricultureBar = document.getElementById('agriculture-bar');
const loveBar = document.getElementById('love-bar');
const healthBar = document.getElementById('health-bar');

function updateScores(question, decision) {
    const modifier = decision === 'Accepté' ? 1 : -1;
    scores.money += modifier * question.money;
    scores.army += modifier * question.army;
    scores.agriculture += modifier * question.agriculture;
    scores.love += modifier * question.love;
    scores.health += modifier * question.health;

    // Update the progress bars dynamically
    updateProgressBar(moneyBar, scores.money);
    updateProgressBar(armyBar, scores.army);
    updateProgressBar(agricultureBar, scores.agriculture);
    updateProgressBar(loveBar, scores.love);
    updateProgressBar(healthBar, scores.health);

    checkForGameOver();
}

function updateProgressBar(bar, score) {
    const percentage = ((score + 10) / 20) * 100; // Convert score from -10..10 to 0..100%
    bar.style.width = `${percentage}%`;
    bar.setAttribute('aria-valuenow', score);
}

// Fonction pour vérifier si le joueur a gagné
function checkForGameOver() {
    if (scores.money <= -10) {
        endGame("Votre royaume est en faillite.");
    } else if (scores.army <= -10) {
        endGame("Votre armée a été décimée.");
    } else if (scores.agriculture <= -10) {
        endGame("L'agriculture a échoué, et la famine s'est installée.");
    } else if (scores.love <= -10) {
        endGame("Votre peuple vous déteste et s'est révolté.");
    } else if (scores.health <= -10) {
        endGame("Une maladie a ravagé votre village.");
    } else if (currentQuestionIndex >= questions.length) {
        endGame("Félicitations ! Vous avez géré votre royaume avec succès.");
    }
}

function replayGame() {
    window.location.reload();
}

// Mise à jour de la fonction endGame pour afficher le message
function endGame(reason) {
    recapElement.classList.remove('d-none');
    gameElement.classList.add('d-none');
    decisionsList.innerHTML = ''; // On réinitialise la liste
    decisions.forEach((decision, index) => {
        const li = document.createElement('li');
        li.textContent = `${questions[index].text}: ${decision}`;
        decisionsList.appendChild(li);
    });
    resultsElement.textContent = `Argent: ${scores.money}, Armée: ${scores.army}, Agriculture: ${scores.agriculture}, Amour: ${scores.love}, Santé: ${scores.health}`;
    
    // Ajout du message de perte ou de victoire
    const reasonElement = document.createElement('p');
    reasonElement.textContent = `Vous avez ${reason.includes("Félicitations") ? "gagné" : "perdu"} : ${reason}`;
    recapElement.appendChild(reasonElement);
    const replay = document.getElementById('replay');
    replay.classList.remove('hidden');
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.text;
        card.classList.remove('accept', 'reject');
        card.style.transform = 'translateX(0)';
        card.style.opacity = '1';
    } else {
        checkForGameOver();
    }
}

function handleSwipe(direction) {
    const decision = direction === 'right' ? 'Accepté' : 'Refusé';
    const currentQuestion = questions[currentQuestionIndex];
    decisions.push(decision);
    updateScores(currentQuestion, decision);
    currentQuestionIndex++;
    setTimeout(showNextQuestion, 300);
}

let startX;

card.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    card.style.transition = 'none';
});

card.addEventListener('mousemove', (event) => {
    if (startX !== undefined) {
        const deltaX = event.clientX - startX;
        card.style.transform = `translateX(${deltaX}px)`;
    }
});

card.addEventListener('mouseup', (event) => {
    const deltaX = event.clientX - startX;
    card.style.transition = 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out';
    if (deltaX > 80) {
        card.classList.add('accept');
        handleSwipe('right');
    } else if (deltaX < -80) {
        card.classList.add('reject');
        handleSwipe('left');
    } else {
        card.style.transform = 'translateX(0)';
    }
    startX = undefined;
});

// Swipe handling for touch devices
card.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    card.style.transition = 'none';
});

card.addEventListener('touchmove', (event) => {
    const deltaX = event.touches[0].clientX - startX;
    card.style.transform = `translateX(${deltaX}px)`;
});

card.addEventListener('touchend', (event) => {
    const deltaX = event.changedTouches[0].clientX - startX;
    card.style.transition = 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out';
    if (deltaX > 80) {
        card.classList.add('accept');
        handleSwipe('right');
    } else if (deltaX < -80) {
        card.classList.add('reject');
        handleSwipe('left');
    } else {
        card.style.transform = 'translateX(0)';
    }
    startX = undefined;
});

showNextQuestion();

