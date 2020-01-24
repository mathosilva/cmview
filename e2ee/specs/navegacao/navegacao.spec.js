const Navegacao = require('../../PageObjects/navegacao/navecacao')
const Login = require('../../PageObjects/acesso/login')

describe('Acessar a pagina de Categorias', () =>{
    it('Dado que estou logado', () =>{
        browser.url('/')
        Login.login()
    })
    it('Quando eu clicar no menu "Detalhe Categorias"', () =>{
        browser.pause(500)
        Navegacao.detalheCat.click()
    })
    it('Então serei direcionado para "Detalhe Categorias"', () =>{
        expect(browser.getUrl()).toContain('/categorias')
        Login.logout()
    })
})

describe('Acessar a pagina de "Detalhe Fornecedores"', () =>{
    it('Dado que estou logado', () =>{
        browser.url('/')
        Login.login()
    })
    it('Quando eu clicar no menu "Detalhe Fornecedores"', () =>{
        browser.pause(500)
        Navegacao.detalheFor.click()
    })
    it('então serei direcionado para "Detalhe Fornecedores"', () =>{
        expect(browser.getUrl()).toContain('/fornecedores')
        Login.logout()
    })
})  
describe('Acessar a pagina de "Ajuste de categorias"', () =>{
    it('Dado que estou logado', () =>{
        browser.url('/')
        Login.login()
    })
    it('Quando eu clicar no menu "Ajuste de categorias"', () =>{
        browser.pause(500)
        Navegacao.ajusteCat.click()
    })
    it('Então serei direcionado para "Ajuste de categorias"', () =>{
        expect(browser.getUrl()).toContain('/categorizacao')
        Login.logout()
    })
})  
describe('Acessar a pagina de "Dashboard"', () =>{
    it('Dado que estou logado', () =>{
        browser.url('/')
        Login.login()
    })
    it('E cliquei em algum menu', () =>{
        browser.pause(500)
        Navegacao.detalheFor.click()
    })
    it('Quando eu clicar em Dashboard', () =>{
        Navegacao.dashboard.click()
    })
    it('Então serei direcionado para home', () =>{
        expect(browser.getUrl()).toContain('/home')
        Login.logout()
    })
}) 
