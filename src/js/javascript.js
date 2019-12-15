/* LOOPS */
let buttonOuvrirBoucle = document.getElementById("button_ouvrir_javascript_boucle");
let buttonFermerBoucle = document.getElementById("button_fermer_javascript_boucle");
let toggleGrandBoucle = document.getElementsByClassName("toggle_grand_javascript_boucle")[0];
let togglePetitBoucle = document.getElementsByClassName("toggle_petit_javascript_boucle")[0];
let containerSoloBoucle = document.getElementsByClassName("container_solo_javascript_boucle")[0];
buttonOuvrirBoucle.addEventListener("click" , () => {
    containerSoloBoucle.classList.toggle("toggle_javascript");
    togglePetitBoucle.setAttribute("id" , "display_none");
    toggleGrandBoucle.id = "";
})
buttonFermerBoucle.addEventListener("click" , () => {
    containerSoloBoucle.classList.toggle("toggle_javascript");
    toggleGrandBoucle.id = "display_none";
    togglePetitBoucle.id = "";
})
/* FIN LOOPS */
/* CONDITIONS */
let buttonOuvrirConditions = document.getElementById("button_ouvrir_javascript_conditions");
let buttonFermerConditions = document.getElementById("button_fermer_javascript_conditions");
let toggleGrandConditions = document.getElementsByClassName("toggle_grand_javascript_conditions")[0];
let togglePetitConditions = document.getElementsByClassName("toggle_petit_javascript_conditions")[0];
let containerSoloConditions = document.getElementsByClassName("container_solo_javascript_conditions")[0];
buttonOuvrirConditions.addEventListener("click" , () => {
    containerSoloConditions.classList.toggle("toggle_javascript");
    togglePetitConditions.setAttribute("id" , "display_none");
    toggleGrandConditions.id = "";
})
buttonFermerConditions.addEventListener("click" , () => {
    containerSoloConditions.classList.toggle("toggle_javascript");
    toggleGrandConditions.id = "display_none";
    togglePetitConditions.id = "";
})
/* FIN CONDITIONS */
/* FONCTIONS */
let buttonOuvrirFonctions = document.getElementById("button_ouvrir_javascript_fonctions");
let buttonFermerFonctions = document.getElementById("button_fermer_javascript_fonctions");
let toggleGrandFonctions = document.getElementsByClassName("toggle_grand_javascript_fonctions")[0];
let togglePetitFonctions = document.getElementsByClassName("toggle_petit_javascript_fonctions")[0];
let containerSoloFonctions = document.getElementsByClassName("container_solo_javascript_fonctions")[0];
buttonOuvrirFonctions.addEventListener("click" , () => {
    containerSoloFonctions.classList.toggle("toggle_javascript");
    togglePetitFonctions.setAttribute("id" , "display_none");
    toggleGrandFonctions.id = "";
})
buttonFermerFonctions.addEventListener("click" , () => {
    containerSoloFonctions.classList.toggle("toggle_javascript");
    toggleGrandFonctions.id = "display_none";
    togglePetitFonctions.id = "";
})
/* FIN FONCTIONS */
/* OBJET */
let buttonOuvrirObjet = document.getElementById("button_ouvrir_javascript_objet");
let buttonFermerObjet = document.getElementById("button_fermer_javascript_objet");
let toggleGrandObjet = document.getElementsByClassName("toggle_grand_javascript_objet")[0];
let togglePetitObjet = document.getElementsByClassName("toggle_petit_javascript_objet")[0];
let containerSoloObjet = document.getElementsByClassName("container_solo_javascript_objet")[0];
buttonOuvrirObjet.addEventListener("click" , () => {
    containerSoloObjet.classList.toggle("toggle_javascript");
    togglePetitObjet.setAttribute("id" , "display_none");
    toggleGrandObjet.id = "";
})
buttonFermerObjet.addEventListener("click" , () => {
    containerSoloObjet.classList.toggle("toggle_javascript");
    toggleGrandObjet.id = "display_none";
    togglePetitObjet.id = "";
})
/* FIN OBJET */
