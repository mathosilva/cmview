const Login = require('../../PageObjects/acesso/login')


describe('login com usuario inválido', ()=>{
    it('Dado que estou na tela de login', () =>{
        browser.url('/')
    })
    it('Quando eu tentar acessar coom um usuário inválido', () =>{
        Login.loginInvalido()
    })
    it('Então o sistema não permitirá o login', () =>{
        Login.erro.waitForDisplayed(5000) 
    })
})

describe('Login', ()=>{
    it('Dado que estou na tela de login', () =>{
        browser.url('/')
    })
    it('Quando eu preencher as credenciais', () =>{
        Login.login()
    })
    it('Então o sistema permitirá o login', () =>{
        expect(browser.getUrl()).toContain('/home')
        Login.logout()
    })
})
