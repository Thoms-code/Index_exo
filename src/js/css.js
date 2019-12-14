/* ANIMATION */
let buttonOuvrirAnimation = document.getElementById("button_ouvrir_animation");
let buttonFermerAnimation = document.getElementById("button_fermer_animation");
let toggleGrandAnimation = document.getElementsByClassName("toggle_grand_animation")[0];
let togglePetitAnimation = document.getElementsByClassName("toggle_petit_animation")[0];
let containerSoloAnimation = document.getElementsByClassName("container_solo_css_animation")[0];
buttonOuvrirAnimation.addEventListener("click" , () => {
    containerSoloAnimation.classList.toggle("toggle_css");
    togglePetitAnimation.setAttribute("id" , "display_none");
    toggleGrandAnimation.id = "";
})
buttonFermerAnimation.addEventListener("click" , () => {
    containerSoloAnimation.classList.toggle("toggle_css");
    toggleGrandAnimation.id = "display_none";
    togglePetitAnimation.id = "";
})
/* FIN ANIMATION */

/* SELECTEURS */
