const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const buscaCep = require('./src/functions/buscaCep');
const buscaMunicipio = require('./src/functions/buscaMunicipio');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/envia-cep', async (req,res) => {
    const { cep } = req.body;
    const result = await buscaCep(cep);

    res.render('resultado', {dado: result});
});

app.post('/envia-municipio', async (req,res) => {
    const { UF } = req.body;
    const result = await buscaMunicipio(UF);

    res.render('resultado2', {dado: result});
});


app.listen(3333);