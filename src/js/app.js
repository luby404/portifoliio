var images = document.querySelectorAll(".content_img img")
var contador = 0
var total = images.length

function hideAll(){images.forEach(el=>{el.classList.remove("show")})}

function back(){
    hideAll()
    contador -= 1
    if(contador < 0) contador = total - 1

    images[contador].classList.add("show")

}
function next(){
    hideAll()
    contador += 1
    if(contador == total) contador = 0

    images[contador].classList.add("show")
}

$("#btn_back").click(back)
$("#btn_next").click(next)

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()
    fetch("", {
        method: "POST",
        body: new FormData(this)
    }).then(res=>{
        alert("Messagem enviada com sucesso!")
    }).catch(erro=>{
        alert("Ouve um erro Ao enviar messagem")
    })
})





