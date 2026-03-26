function exercicio1 (){
    alert("OIE")
}
//getElement
// function
const batata = document.getElementById("exercicios")
// addEventListner
batata.addEventListener('click',() => (exercicio1()) )
