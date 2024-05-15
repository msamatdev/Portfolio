// Paragraphes : nom du joueur qui joue,  nom du gagnant, texte d'egalite
let playerText = document.getElementById("player");
let victoryText = document.getElementById("victory");
victoryText.style.display = "none";
let victorySpan = document.querySelector("#victory > span");
let noWinText = document.getElementById("noWinner");
noWinText.style.display = "none";


// tdList : de la forme [tds1ereLigne, tds2emeLigne, tds3emeLigne]
let trs = document.querySelectorAll('tr');
let tdList = []
for (i = 0; i < trs.length; i++) {
    tdList.push(trs[i].querySelectorAll(":scope > *"));
}


function checkVictory() {
    for (i = 0; i < 3; i++) {
        // Verification de la victoire horizontalement
        if (tdList[i][0].textContent != "" && tdList[i][1].textContent != "" && tdList[i][2].textContent != "") {
            if (tdList[i][0].textContent == tdList[i][1].textContent && tdList[i][1].textContent == tdList[i][2].textContent) {
                printVictory(tdList[i][0].textContent);
                return true;
            }
        }

        // Verification de la victoire verticalement
        if (tdList[0][i].textContent != "" && tdList[1][i].textContent != "" && tdList[2][i].textContent != "") {
            if (tdList[0][i].textContent == tdList[1][i].textContent && tdList[1][i].textContent == tdList[2][i].textContent) {
                printVictory(tdList[0][i].textContent);
                return true;
            }
        }

        // Vérification de la victoire en diagonale
        if (tdList[0][2].textContent != "" && tdList[1][1].textContent != "" && tdList[2][0].textContent != "") {
            if (tdList[0][2].textContent == tdList[1][1].textContent && tdList[1][1].textContent == tdList[2][0].textContent) {
                printVictory(tdList[0][2].textContent);
                return true;
            }
        }

        if (tdList[0][0].textContent != "" && tdList[1][1].textContent != "" && tdList[2][2].textContent != "") {
            if (tdList[0][0].textContent == tdList[1][1].textContent && tdList[1][1].textContent == tdList[2][2].textContent) {
                printVictory(tdList[0][0].textContent);
                return true;
            }
        }
    }

    return false;
}


// Introduit variable pour savoir si partie gagnee
let won = false;
function printVictory(winner) {
    won = true;
    playerText.style.display = "none";
    victorySpan.textContent = winner;
    victoryText.style.display = "block";

    setTimeout(() => {
        emptyAll();
        victoryText.style.display = "none";
        player = "X";
        playerSpan.textContent = player;
        playerText.style.display = "block";
        won = false;
    }, 3000);
}


function casesFull() {
    // Verifie si toutes les cases sont vides
    for (i = 0; i < 9; i++) {
        if (tds[i].textContent == "") {
            return;
        }
    }

    playerText.style.display = "none";
    noWinText.style.display = "block";

    setTimeout( () => {
        emptyAll();
        player = "X";
        playerSpan.textContent = player;
        playerText.style.display = "block";
        noWinText.style.display = "none";
    }, 3000);
}