let player = "X";
let playerSpan = document.querySelector("#player > span");
playerSpan.textContent = player;
let tds = document.querySelectorAll('td');


function fillCase(td) {
    td.textContent = player;
    if (player == "X") {
        td.style.color = "blue";
        player = "O";
        td.style.textShadow = "rgb(0,0,200) 2px 2px";
    } else {
        td.style.color = "red";
        player = "X";
        td.style.textShadow = "rgb(200,0,0) 2px 2px";
    }
    td.className = "hoverFull";
    playerSpan.textContent = player;
    window.getComputedStyle(td);
    td.style.fontSize = "84px";
}


tds.forEach(td => {
    td.addEventListener("click", () => {
        if (td.textContent == "" && won == false) {
            fillCase(td);
            if (!checkVictory()) {
                casesFull();
            }
        }
    });

    td.addEventListener("mouseover", () => {
        if (td.textContent != "" || won == true) {
            td.className = "hoverFull";
        } else {
            td.className = "hoverEmpty";
        }
    });

    td.addEventListener("mouseleave", () => {
        td.className = "";
    });
});