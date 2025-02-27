const SELECT_REGIAO =  document.getElementById('regiao');
const SELECT_ESTADO = document.getElementById('estado');
const SELECT_MUNICIPIO = document.getElementById('municipio');

function atualizarRegioes() {
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes`
    let regioes = [];

    fetch(url)
        .then(res => res.json())
        .then(cada => {
            cada.map(dado => regioes += `<option value= ${dado.id}>${dado.nome}</option>`)

            SELECT_REGIAO.innerHTML += regioes;
        });
    }
atualizarRegioes();

    // let regioes = [
    //     'Norte',
    //     'Nordeste',
    //     'Sul',
    //     'Sudeste',
    //     'Centro Oeste'
    // ];

    // regioes = regioes.map(cada => `<option>${cada}</option>`);

    // SELECT_REGIAO.innerHTML += regioes;

function atualizarEstados(event) {
    SELECT_ESTADO.removeAttribute('disabled')
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${event.target.value}/estados`
    let estados = [];

    fetch(url)
        .then(res => res.json())
        .then(cada => {
            console.log
            cada.map(dado => estados += `<option value= ${dado.id}>${dado.nome}</option>`)

            SELECT_ESTADO.innerHTML += estados;
        });
}


function atualizarMunicipios(event) {
    SELECT_MUNICIPIO.removeAttribute('disabled')
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`
    let municipios = [];

    fetch(url)
    .then(res => res.json())
    .then(cada => {
        console.log
        cada.map(dado => municipios += `<option>${dado.nome}</option>`)

        SELECT_MUNICIPIO.innerHTML += municipios;
    });
}