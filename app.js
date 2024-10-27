const BtnDer = document.querySelector("#flecha-derecha")
const BtnIzq = document.querySelector("#flecha-izquierda")

const content = document.querySelector(".slider-proyectos")

BtnDer.addEventListener("click", ()=> {
    content.scrollLeft += 1518
});

BtnIzq.addEventListener("click", ()=> {
    content.scrollLeft -= 1518
});
