const fetch = require('node-fetch');

module.exports = async function buscaMunicipio(UF) {
    const municipio = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`);
    const json = await municipio.json();

    return json;
}
