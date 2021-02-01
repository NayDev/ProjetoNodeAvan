const fetch = require('node-fetch');

module.exports = async function buscaMunicipio(uf) {
    const municipio = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    const json = await municipio.json();

    return json;
}
