function mudaCor(novaCor) {
    var elemento = document.getElementById("para1");
    elemento.style.backgroundColor = novaCor;
    elemento.style.display = 'inline';
};

const imagem = document.getElementById('foto')
let foto_t = false


imagem.addEventListener('click', ()=>{
    if(foto_t === false){
        imagem.src = 'pokedex.png';
        foto_t = true
    }else{
        imagem.src = 'teste.jpg'
        foto_t = false;
    }
})







const rodri_circulo = document.getElementById('circulo')
let tamanho_rodri = 10

rodri_circulo.addEventListener('dblclick',()=>{
    rodri_circulo.style.borderRadius = `${tamanho_rodri}px`
    rodri_circulo.style.width = `${tamanho_rodri}px`
    rodri_circulo.style.height = `${tamanho_rodri}px`
    tamanho_rodri = tamanho_rodri+20
})