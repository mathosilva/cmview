const bodyNCostumer = require('./../mock/bodyNCostumer.json')

function restoreMock(){
    bodyNCostumer.novo.customer.cnpj = ''
    bodyNCostumer.novo.user.username = ''
    bodyNCostumer.novo.user.email = ''
}
module.exports = {
    restoreMock
}