const data = require('../../dataJSON/data.json')

class Login {
    get user(){return $('input[name="username"]')}
    get password(){return $('input[name="password"]')}
    get btnAcessar(){return $('button.sc-bZQynM.bAtdts')}
    get erro(){return $('div.rrt-holder')}
    get menu(){return $('div.sc-kgAjT.iBiKrj')}
    get sair(){return $('div[tooltip="Sair"]')}


    login(){
        this.user.setValue(data.dataLogin.user)
        this.password.setValue(data.dataLogin.password)
        this.btnAcessar.click()
        this.btnAcessar.waitForDisplayed(50000, true)
    }
    loginInvalido(){
        this.user.setValue('ksjbfhejdkd')
        this.password.setValue('hdhdwbhdwbhdbi')
        this.btnAcessar.click()
    }
    logout(){
        this.sair.click()
        this.btnAcessar.waitForDisplayed(100000)
        expect(browser.getUrl()).toContain('/login')
    }
}

module.exports = new Login