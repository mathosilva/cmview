const data = require('../../dataJSON/data.json')

class ReqSenha {
    get esqSenha() {return $('a[href="/esqueci-minha-senha"]')};
    get email() {return $('input[type="email"]')}
    get btnEnviar() {return $('button.sc-bZQynM.bAtdts')}
    get validador() {return $('div.validator')}
    get secesso() {return $('div.success')}
    get textoSecesso() {return $$('div.success > span')[2]}


    recupera(teste){
        browser.url('/')
        this.esqSenha.click()
        this.email.waitForDisplayed(10000)
        if(teste){
            this.email.setValue(data.dataRecupera.email)
            this.btnEnviar.click()
            this.secesso.waitForDisplayed(100000) 
        } else{
            this.email.setValue(data.dataRecupera.invalidmail)
            this.btnEnviar.waitForEnabled(100000)
            this.btnEnviar.click()
            this.validador.waitForDisplayed(100000)
        }
    }
}

module.exports = new ReqSenha;