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
       imagem.src = 'MiniSonic.png'
       foto_t = false;
   }
})


const form = document.getElementById('texto')
const section = document.getElementById('sc')


form.addEventListener("submit", (event)=>{
   event.preventDefault();
    var input=form.querySelector('input')
   if(parseInt(input.value) < 24 ||isNaN(input.value) ){
       var p = section.querySelector('p')
       p.innerText = "Professor é mais velho"
       p.style.display = 'block'
   }else{
       var p = section.querySelector('p')
       p.innerHTML = '<h1> Olá, Mundo </h1>'
       p.style.display = 'block'
   }
})










const rodri_circulo = document.getElementById('circulo')
let tamanho_rodri = 1


rodri_circulo.addEventListener('dblclick',() => {
   alert(rodri_tamanho)
   rodri_circulo.style.borderRadius = `${tamanho_rodri}px`;
   rodri_circulo.style.width = `${tamanho_rodri*2}px`;
   rodri_circulo.style.height = `${tamanho_rodri*2}px`;
   tamanho_rodri += 30;
});
