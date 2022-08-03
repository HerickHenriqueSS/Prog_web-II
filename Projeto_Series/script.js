//script.js
let imported = document.createElement("script");
imported.src = "bd.js";
document.head.appendChild(imported);


let conteudo = document.querySelector(".conteudo h1");
conteudo.innerHTML =  bd.nome

//Conteudo

let resumo = document.querySelector(".resumo");
let nota = document.querySelector(".nota");
let generos = document.querySelector(".generos");

generos.innerHTML = "<b> Genero: </b>" + bd.generos;
resumo.innerHTML = "<b>Resumo: </b>" + bd.resumo;
nota.innerHTML = "<b> Nota: </b>" + bd.nota;

//poster

let image = document.querySelector("#image");
image.setAttribute("src", bd.fotoPoster);

//Atores


// Joyce Bayes
let imgAtores = document.querySelector("#imgAtores");
let nome = document.querySelector(".nome");
let personagem = document.querySelector(".personagem");

imgAtores.setAttribute("src", bd.elenco[0].foto);
nome.innerHTML = "<b>Nome: </b>" + bd.elenco[0].nome;
personagem.innerHTML = "<b>Personagem: </b>" + bd.elenco[0].personagem;

//Jim Hopper
let imgAtores1 = document.querySelector("#imgAtores1");
let nome1 = document.querySelector(".nome1");
let personagem1 = document.querySelector(".personagem1");

imgAtores1.setAttribute("src", bd.elenco[1].foto);
nome1.innerHTML = "<b>Nome: </b>" + bd.elenco[1].nome;
personagem1.innerHTML = "<b>Personagem: </b>" + bd.elenco[1].personagem;

//Mike Wheeler
let imgAtores2 = document.querySelector("#imgAtores2");
let nome2 = document.querySelector(".nome2");
let personagem2 = document.querySelector(".personagem2");

imgAtores2.setAttribute("src", bd.elenco[2].foto);
nome2.innerHTML = "<b>Nome: </b>" + bd.elenco[2].nome;
personagem2.innerHTML = "<b>Personagem: </b>" + bd.elenco[2].personagem;

//Eleven
let imgAtores3 = document.querySelector("#imgAtores3");
let nome3 = document.querySelector(".nome3");
let personagem3 = document.querySelector(".personagem3");
imgAtores3.setAttribute("src", bd.elenco[3].foto);
nome3.innerHTML = "<b>Nome: </b>" + bd.elenco[3].nome;
personagem3.innerHTML = "<b>Personagem: </b>" + bd.elenco[3].personagem;

//Dustin Henderson 
let imgAtores4 = document.querySelector("#imgAtores4");
let nome4 = document.querySelector(".nome4");
let personagem4 = document.querySelector(".personagem4");

imgAtores4.setAttribute("src", bd.elenco[4].foto);
nome4.innerHTML = "<b>Nome: </b>" + bd.elenco[4].nome;
personagem4.innerHTML = "<b>Personagem: </b>" + bd.elenco[4].personagem;

//Lucas Sinclair
let imgAtores5 = document.querySelector("#imgAtores5");
let nome5 = document.querySelector(".nome5");
let personagem5 = document.querySelector(".personagem5");

imgAtores5.setAttribute("src", bd.elenco[5].foto);
nome5.innerHTML = "<b>Nome: </b>" + bd.elenco[5].nome;
personagem5.innerHTML = "<b>Personagem: </b>" + bd.elenco[5].personagem;

//Nancy Wheeler
let imgAtores6 = document.querySelector("#imgAtores6");
let nome6 = document.querySelector(".nome6");
let personagem6 = document.querySelector(".personagem6");

imgAtores6.setAttribute("src", bd.elenco[6].foto);
nome6.innerHTML = "<b>Nome: </b>" + bd.elenco[6].nome;
personagem6.innerHTML = "<b>Personagem: </b>" + bd.elenco[6].personagem;

//Jonathan Byers
let imgAtores7 = document.querySelector("#imgAtores7");
let nome7 = document.querySelector(".nome7");
let personagem7 = document.querySelector(".personagem7");

imgAtores7.setAttribute("src", bd.elenco[7].foto);
nome7.innerHTML = "<b>Nome: </b>" + bd.elenco[7].nome;
personagem7.innerHTML = "<b>Personagem: </b>" + bd.elenco[7].personagem;

//Max Mayfield
let imgAtores8 = document.querySelector("#imgAtores8");
let nome8 = document.querySelector(".nome8");
let personagem8 = document.querySelector(".personagem8");

imgAtores8.setAttribute("src", bd.elenco[8].foto);
nome8.innerHTML = "<b>Nome: </b>" + bd.elenco[8].nome;
personagem8.innerHTML = "<b>Personagem: </b>" + bd.elenco[8].personagem;

//Billy Hargrove
let imgAtores9 = document.querySelector("#imgAtores9");
let nome9 = document.querySelector(".nome9");
let personagem9 = document.querySelector(".personagem9");

imgAtores9.setAttribute("src", bd.elenco[9].foto);
nome9.innerHTML = "<b>Nome: </b>" + bd.elenco[9].nome;
personagem9.innerHTML = "<b>Personagem: </b>" + bd.elenco[9].personagem;

//Karen Wheeler
let imgAtores10 = document.querySelector("#imgAtores10");
let nome10 = document.querySelector(".nome10");
let personagem10 = document.querySelector(".personagem10");

imgAtores10.setAttribute("src", bd.elenco[10].foto);
nome10.innerHTML = "<b>Nome: </b>" + bd.elenco[10].nome;
personagem10.innerHTML = "<b>Personagem: </b>" + bd.elenco[10].personagem;

//Will Bayers
let imgAtores11 = document.querySelector("#imgAtores11");
let nome11 = document.querySelector(".nome11");
let personagem11 = document.querySelector(".personagem11");

imgAtores11.setAttribute("src", bd.elenco[11].foto);
nome11.innerHTML = "<b>Nome: </b>" + bd.elenco[11].nome;
personagem11.innerHTML = "<b>Personagem: </b>" + bd.elenco[11].personagem;

//Steve Harrington
let imgAtores12 = document.querySelector("#imgAtores12");
let nome12 = document.querySelector(".nome12");
let personagem12 = document.querySelector(".personagem12");

imgAtores12.setAttribute("src", bd.elenco[12].foto);
nome12.innerHTML = "<b>Nome: </b>" + bd.elenco[12].nome;
personagem12.innerHTML = "<b>Personagem: </b>" + bd.elenco[12].personagem;

//Erica Sinclair
let imgAtores13 = document.querySelector("#imgAtores13");
let nome13 = document.querySelector(".nome13");
let personagem13 = document.querySelector(".personagem13");

imgAtores13.setAttribute("src", bd.elenco[13].foto);
nome13.innerHTML = "<b>Nome: </b>" + bd.elenco[13].nome;
personagem13.innerHTML = "<b>Personagem: </b>" + bd.elenco[13].personagem;

//Robin
let imgAtores14 = document.querySelector("#imgAtores14");
let nome14 = document.querySelector(".nome14");
let personagem14 = document.querySelector(".personagem14");

imgAtores14.setAttribute("src", bd.elenco[14].foto);
nome14.innerHTML = "<b>Nome: </b>" + bd.elenco[14].nome;
personagem14.innerHTML = "<b>Personagem: </b>" + bd.elenco[14].personagem;

//Temporadas

let imgTemp1 = document.querySelector("#imgTemp1");
let nEp1 = document.querySelector(".nEp1")

imgTemp1.setAttribute("src", bd.temporadas[0].poster);
nEp1.innerHTML = "Episódios: " + bd.temporadas[0].numero_episodios;

let imgTemp2 = document.querySelector("#imgTemp2");
let nEp2 = document.querySelector(".nEp2")

imgTemp2.setAttribute("src", bd.temporadas[1].poster);
nEp2.innerHTML = "Episódios: " + bd.temporadas[1].numero_episodios;

let imgTemp3 = document.querySelector("#imgTemp3");
let nEp3 = document.querySelector(".nEp3")

imgTemp3.setAttribute("src", bd.temporadas[2].poster);
nEp3.innerHTML = "Episódios: " + bd.temporadas[2].numero_episodios;

//Episodios

let tumb = document.querySelector("#tumb");
let nomeEp = document.querySelector(".nomeEp");
let notaEp = document.querySelector(".notaEp");
let resumoEp = document.querySelector(".resumoEp");

tumb.setAttribute("src", bd.temporadas[1].episodios[0].foto);
nomeEp.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[0].nome;
notaEp.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[0].nota;
resumoEp.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[0].resumo;

//Episodio 2

let tumb1 = document.querySelector("#tumb1");
let nomeEp1 = document.querySelector(".nomeEp1");
let notaEp1 = document.querySelector(".notaEp1");
let resumoEp1 = document.querySelector(".resumoEp1");

tumb1.setAttribute("src", bd.temporadas[1].episodios[1].foto);
nomeEp1.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[1].nome;
notaEp1.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[1].nota;
resumoEp1.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[1].resumo;

//Episodio 3

let tumb2 = document.querySelector("#tumb2");
let nomeEp2 = document.querySelector(".nomeEp2");
let notaEp2 = document.querySelector(".notaEp2");
let resumoEp2 = document.querySelector(".resumoEp2");

tumb2.setAttribute("src", bd.temporadas[1].episodios[2].foto);
nomeEp2.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[2].nome;
notaEp2.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[2].nota;
resumoEp2.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[2].resumo;

//Episodio 4

let tumb3 = document.querySelector("#tumb3");
let nomeEp3 = document.querySelector(".nomeEp3");
let notaEp3 = document.querySelector(".notaEp3");
let resumoEp3 = document.querySelector(".resumoEp3");

tumb3.setAttribute("src", bd.temporadas[1].episodios[3].foto);
nomeEp3.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[3].nome;
notaEp3.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[3].nota;
resumoEp3.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[3].resumo;

//Episodio 5

let tumb4 = document.querySelector("#tumb4");
let nomeEp4 = document.querySelector(".nomeEp4");
let notaEp4 = document.querySelector(".notaEp4");
let resumoEp4 = document.querySelector(".resumoEp4");

tumb4.setAttribute("src", bd.temporadas[1].episodios[4].foto);
nomeEp4.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[4].nome;
notaEp4.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[4].nota;
resumoEp4.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[4].resumo;

//Episodio 6

let tumb5 = document.querySelector("#tumb5");
let nomeEp5 = document.querySelector(".nomeEp5");
let notaEp5 = document.querySelector(".notaEp5");
let resumoEp5 = document.querySelector(".resumoEp5");

tumb5.setAttribute("src", bd.temporadas[1].episodios[5].foto);
nomeEp5.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[5].nome;
notaEp5.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[5].nota;
resumoEp5.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[5].resumo;

//Episodio 7

let tumb6 = document.querySelector("#tumb6");
let nomeEp6 = document.querySelector(".nomeEp6");
let notaEp6 = document.querySelector(".notaEp6");
let resumoEp6 = document.querySelector(".resumoEp6");

tumb6.setAttribute("src", bd.temporadas[1].episodios[6].foto);
nomeEp6.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[6].nome;
notaEp6.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[6].nota;
resumoEp6.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[6].resumo;

//Episodio 8

let tumb7 = document.querySelector("#tumb7");
let nomeEp7 = document.querySelector(".nomeEp7");
let notaEp7 = document.querySelector(".notaEp7");
let resumoEp7 = document.querySelector(".resumoEp7");

tumb7.setAttribute("src", bd.temporadas[1].episodios[7].foto);
nomeEp7.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[7].nome;
notaEp7.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[7].nota;
resumoEp7.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[7].resumo;

//Episodio 9

let tumb8 = document.querySelector("#tumb8");
let nomeEp8 = document.querySelector(".nomeEp8");
let notaEp8 = document.querySelector(".notaEp8");
let resumoEp8 = document.querySelector(".resumoEp8");

tumb8.setAttribute("src", bd.temporadas[1].episodios[8].foto);
nomeEp8.innerHTML = "<b>Episodio: </b>" + bd.temporadas[1].episodios[8].nome;
notaEp8.innerHTML = "<b>Nota: </b>" + bd.temporadas[1].episodios[8].nota;
resumoEp8.innerHTML = "<b>Resumo: </b>" + bd.temporadas[1].episodios[8].resumo;

