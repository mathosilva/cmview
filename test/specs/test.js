const api = require('../helper/api');
const bodyNCostumer = require('../mock/bodyNCostumer.json');
const faker = require('faker')
const CNPJ = require('cpf_cnpj').CNPJ
const restore = require('../helper/restoreMock')

describe('Criar usuário', () =>{
    it('Deve Gerar os dados', async () => {
        bodyNCostumer.novo.customer.cnpj = CNPJ.generate(true)
        bodyNCostumer.novo.user.username = faker.internet.userName()
        bodyNCostumer.novo.user.email = faker.internet.email()
    })
    it('Deve cadastrar o customer', async () =>{
        res = await api.post(url.raiz, url.newCostumer, bodyNCostumer.novo)
    })
    it('deve retornar o status 200', async () =>{
        expect(res.statusCode).toEqual(200)
        restore.restoreMock()
    })
})
describe('Criar customer Sem CNPJ', () =>{
    it('Deve gerar dados', async () =>{
        bodyNCostumer.novo.customer.username = faker.internet.userName()
        bodyNCostumer.novo.user.email = faker.internet.email()
    })
    it('Deve tentar criar o customer sem o CNPJ', async () =>{
       res = await api.post(url.raiz, url.newCostumer, bodyNCostumer.novo)
    })
    it('Deve retornar SatatusCode 502', async () =>{
        expect(res.statusCode).toEqual(502)
        restore.restoreMock()
    })
})
describe('Criar customer username', () =>{
    it('Deve gerar dados', () =>{
        bodyNCostumer.novo.customer.cnpj = CNPJ.generate(true)
        bodyNCostumer.novo.user.email = faker.internet.email()
    })
    it('Deve tentar criar o customer sem o username', async () =>{
       res = await api.post(url.raiz, url.newCostumer, bodyNCostumer.novo)
    })
    it('Deve retornar SatatusCode 502', () =>{
        expect(res.statusCode).toEqual(502)
        restore.restoreMock()
    })
})
describe('Criar customer Sem email do user', () =>{
    it('Deve gerar dados', async () =>{
        bodyNCostumer.novo.customer.cnpj = CNPJ.generate(true)
        bodyNCostumer.novo.user.username = faker.internet.userName()
    })
    it('Deve tentar criar o customer sem o email do user', async () =>{
       res = await api.post(url.raiz, url.newCostumer, bodyNCostumer.novo)
    })
    it('Deve retornar SatatusCode 502', async () =>{
        expect(res.statusCode).toEqual(502)
        restore.restoreMock()
    })
})
describe('Criar customer sem senha do user', () =>{
    it('Deve gerar dados', async () =>{
        bodyNCostumer.novo.customer.cnpj = CNPJ.generate(true)
        bodyNCostumer.novo.user.username = faker.internet.userName()
        bodyNCostumer.novo.user.email = faker.internet.email()
        bodyNCostumer.novo.user.senha = ''
    })
    it('Deve tentar criar o customer sem a senha do user', async () =>{
       res = await api.post(url.raiz, url.newCostumer, bodyNCostumer.novo)
    })
    it('Deve retornar SatatusCode 502', async () =>{
        expect(res.statusCode).toEqual(502)
        bodyNCostumer.novo.user.senha = faker.internet.password()
        restore.restoreMock()
    })
})
describe('Criar usuário com CNPJ existente', () =>{
    it('Deve gerar dados com CNPJ existente', async() =>{
        bodyNCostumer.novo.customer.cnpj = bodyNCostumer.exist.cnpj
        bodyNCostumer.novo.user.username = faker.internet.userName()
        bodyNCostumer.novo.user.email = faker.internet.email()
    })
    it('Deve tentar cadastrar usuario existente', async () =>{
        res = await api.post(url.raiz, url.newCostumer, bodyNCostumer.novo)
    })
    it('Deve retornar que o CNPJ está em uso', async () =>{
        var docRep = bodyNCostumer.novo.customer.cnpj
        expect(res.statusCode).toEqual(200)
        expect(res.body.customer.message).toEqual(`CNPJ: ${docRep} already in use`)
        restore.restoreMock()
    })
})
describe('Criar user com username existente', () =>{
    it('Deve gerar dados com username existente', () =>{
        bodyNCostumer.novo.customer.cnpj = CNPJ.generate(true)
        bodyNCostumer.novo.user.username = bodyNCostumer.exist.username
        bodyNCostumer.novo.user.email = faker.internet.email()
    })
    it('Deve tentar cadastrar usuario existente', async () =>{
        res = await api.post(url.raiz, url.newCostumer, bodyNCostumer.novo)
        
    })
    it('Deve retornar StatusCode 502', async () =>{
        expect(res.statusCode).toEqual(500)
        restore.restoreMock()
    })
})
describe('Criar user com email existente', () =>{
    it('Deve gerar dados com email do user existente', () =>{
        bodyNCostumer.novo.customer.cnpj = CNPJ.generate(true)
        bodyNCostumer.novo.user.username = faker.internet.userName()
        bodyNCostumer.novo.user.email = bodyNCostumer.exist.email
    })
    it('Deve tentar cadastrar usuario existente', async () =>{
        res = await api.post(url.raiz, url.newCostumer, bodyNCostumer.novo)
    })
    it('Deve retornar StatusCode 502', async () =>{
        expect(res.statusCode).toEqual(500)
        restore.restoreMock()
    })
})

