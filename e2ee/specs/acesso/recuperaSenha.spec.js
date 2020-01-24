const ReqSenha = require('../../PageObjects/acesso/recuperaSenha')


describe('Recuperar senha com email inválido', ()=>{
    it('Dado que estou na tela de login', () =>{
        browser.url('/')
    })
    it('Quando eu tentar recuperar minha senha com um email inválido', () =>{
        ReqSenha.recupera()
    })
    it('Então o sistema retornará um erro', () =>{ 
        expect(ReqSenha.validador.getText()).toContain('Email invalido')
        
    })
})
describe('Recuperar senha', ()=>{
    it('Dado que estou na tela de login', () =>{
        browser.url('/')
    })
    it('Quando eu tentar recuperar minha senha através do meu email', () =>{
        ReqSenha.recupera(true)
    })
    it('Então o sistema exibirá o texto de sucesso', () =>{
        expect(ReqSenha.textoSecesso.getText()).toContain('Verifique a sua caixa de entrada!')
    })
})