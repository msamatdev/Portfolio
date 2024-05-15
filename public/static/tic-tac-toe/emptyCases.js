// Vide les cases et reinstaure une taille de police plus petite
// pour recreer l'animation lors du remplissage des cases
function emptyAll() {
    for (i = 0; i < 9; i++) {
        tds[i].textContent = "";
        tds[i].style.fontSize = "40px";
    }
}