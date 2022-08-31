
const express = require("express");
const cors = require("cors");

// Dados
const bd = [
    {produto: "Mouse", preco: 15.99},
    {produto: "Teclado", preco: 25.99},
    {produto: "Fone de ouvido", preco: 10.99},
]

// Rotas
const rotas = express.Router();

// Rota principal
rotas.get("/", (req, res) =>{
    res.send("Rota inicial do servidor");
})

rotas.get("/produtos", (req, res) =>{
    const lista =[];
    for (item of bd){
        lista.push(item.produto);
    }
    return res.status(200).json(lista);
})

rotas.get ("/produto/:nome", (req, res) =>{
    const nome = req.params.nome;
    let produto ={};
    for (let item of bd){
        if (item.produto == nome){
            produto = item;
            break;
        }
    }

    return res.status(200).json(produto);
})


// Configuração do servidor
const app = express();          // Iniciei a configuração do servidor

app.use(cors());                // Permeite o acesso publico
app.use(express.json());        // Toda comunicação ser realizada em JSON
app.use(rotas);                 // define o sistema de rotas

const port = 3333;

// Inicializando o servidor
app.listen(port, () => console.log(`Acesse http://localhost:${port}`));