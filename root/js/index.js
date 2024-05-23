let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnfechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', () => {
    boxBuscar.classList.add('ativar');
})

btnfechar.addEventListener('click', () => {
    boxBuscar.classList.remove('ativar');
})


let carrinho = document.querySelector('.carrinho');

carrinho.onclick = () => {
  alert("Nenhum item no carrinho de compras")
  
}


var banners = ["./img/carro01.jpg", "./img/carro02.jpeg", "./img/carro03.jpg"];
var bannerAtual = 0;
function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 3;
  document.querySelector(".images img").src = banners[bannerAtual];
}
let timer = setInterval(trocaBanner, 2000);

var controle = document.querySelector(".pause");
controle.onclick = trocarImagem
function trocarImagem() {
  if (controle.className == "pause") {
    clearInterval(timer);
    controle.className = "play";
  } else {
    timer = setInterval(trocaBanner, 2000);
    controle.className = "pause";
  }
  return false;
};