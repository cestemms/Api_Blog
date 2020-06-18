const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const requireDir = require ('require-dir');

//Iniciaindo o App
const app = express ();
app.use(express.json());
app.use(cors());

/*Iniciando o Banco de Dados. 
Os parâmetros useNewUrlParser:e useUnifiedTopology são necessários para a versão do mongoose que eu estou utilizando.
Caso haja alguma atualização, estes parâmetros podem ser descontinuados e precisarão ser removidos
*/
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

//requireDir é a Biblioteca que chama os models
requireDir ('./src/models');

//Rotas
app.use('/', require('./src/routes'));

//Porta do navegador
app.listen(3001);