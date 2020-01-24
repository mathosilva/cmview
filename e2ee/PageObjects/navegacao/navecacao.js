class Navegacao{
    get dashboard(){return $('div[tooltip="Dashboard"]')}
    get detalheCat(){return $('div[tooltip="Detalhe Categorias"]')}
    get detalheFor(){return $('div[tooltip="Detalhe Fornecedores"]')}
    get ajusteCat(){return $('div[tooltip="Ajuste de Categorias"]')}
}
module.exports = new Navegacao