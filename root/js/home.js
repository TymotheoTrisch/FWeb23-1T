function validaBusca() {
  console.log(document.querySelector("#q").value);
  if (document.querySelector("#q").value == "") {
    alert("Não podia ter deixado em branco a busca!");
    document.querySelector(".icon-busca").style.background = "red";
    return false;
  }
}

document.querySelector("#form-busca").onsubmit = validaBusca;

document.querySelector("#form-busca").onclick = () => {
  document.querySelector(".icon-busca").style.background = "";
};

var banners = ["./img/destaque-home.jpg", "./img/destaque-home2.jpg"];
var bannerAtual = 0;
function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector(".destaque img").src = banners[bannerAtual];
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