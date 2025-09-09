const rodri_circulo = document.getElementById('circulo')
let tamanho_rodri = 10

rodri_circulo.addEventListener('dblclick',()=>{
    rodri_circulo.style.borderRadius = `${tamanho_rodri}px`
    rodri_circulo.style.width = `${tamanho_rodri}px`
    rodri_circulo.style.height = `${tamanho_rodri}px`
    tamanho_rodri = tamanho_rodri+20
})