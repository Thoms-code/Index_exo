let clicHTML = document.getElementsByClassName("container_menu_sommaire")[0];
let clicCSS = document.getElementsByClassName("container_menu_sommaire")[1];
let clicJavascript = document.getElementsByClassName("container_menu_sommaire")[2];
console.log(clicJavascript);


clicHTML.addEventListener("click" , () => {
    window.open("../../pages/html.html" , "_self")
})
clicCSS.addEventListener("click" , () => {
    window.open("../../pages/css.html" , "_self")
})
clicJavascript.addEventListener("click" , () => {
    window.open("../../pages/javascript.html" , "_self")
})