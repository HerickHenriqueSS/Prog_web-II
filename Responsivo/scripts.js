// scripts.js

/* let nomes = new Array(); */
let nomes = ["Ana", "Bruno", "Carlos"];
console.log(nomes);

let primeiro = nomes[0];
console.log(primeiro);

let tamanho = nomes.length;
console.log(" a lista possui " + tamanho + " elementos");

/* nomes[0] = " Ana Maria";
nomes[0] = nomes[0] + "Maria"; */
nomes[0] += " Maria";
console.log(nomes);

/* Inserindo um novo nome no final da lista */
nomes.push("Daniel", "Edson", "Fernando");
console.log(nomes);

/* Removendo o ultimo elemento da lista */
nomes.pop();
console.log(nomes);

/* Inserindo um novo nome no inicio da lista */
/* nomes.unshift("Daniel", "Edson", "Fernando");
console.log(nomes); */

/* Removendo o primeiro elemento da lista */
/* nomes.shift();
console.log(nomes); */




for (let i =0;i < nomes.length; i++){
    /* nomes[i] = "Dr " + nomes[i]; */
    console.log( nomes[i]);
}

console.log("-----------------");

for (let nome of nomes) {
    /* nome = "Dr " + nome;      "Não altera a Lista" */
    console.log(nome);
    
}
console.log("-----------------");





/* let ficha = new Object(); */
let ficha = {
    nome : 'Ana',
    Idade: 30,
    Cidade: 'Ituiutaba',
    Devendo: false
};
console.log(ficha);
/* console.log(ficha.nome); */

let campo = "nome";
console.log(ficha[campo]);

console.log("-----------------");


for (let item in ficha){
    console.log(item, ficha[item]);
};


console.log("-----------------");


let alunos = [
    {
        nome : "Ana",
        nota : 9.7,
        disciplinas: [
            {
                nome: "PT 1",
                cursado: true
            },
            {
                nome: "PT 2",
                cursado: false
            }
        ]
    },{
        nome : "Bruno",
        nota : 2.4
    },{
        nome : "Carlos",
        nota : 6.0
    }
];
for (let nomes of alunos){
    console.log(nomes.nome);

};

/* Manipulando HTML */

let infoNome = document.getElementById("infoNome");
console.log(infoNome.innerText)

let infoDisciplinas =  document.querySelector("#infoDisciplinas")

infoNome.innerText = alunos[0].nome

let html = "";
for (let i = 0; i < alunos[0].disciplinas.length;i ++){

    let nomeDisc = alunos[0].disciplinas[i].nome;
    let status = alunos[0].disciplinas[i].cursado == true ? "cursado" : "cursando";

   /*  html += "<b>" + nomeDisc + "</b> ("+ status+ ")<br>" */
    html += `<b>${nomeDisc} </b> (${status})<br/>`;
}
infoDisciplinas.innerHTML = html;