const supertest = require('supertest')
const app = require('../../src/app')
const TesouroUsuario = require('../../src/models/Tesouro')
const request = supertest(app)
const TOKEN = '123456'

describe('Controller', () => {
    beforeEach(async () => {
        await TesouroUsuario.deleteMany({

        })
    })

    it('Deveria retornar status code de 200', async () =>{
        const response = await request.get('/tesouro').set('token', TOKEN)
        expect(response.status).toBe(200)
    })
    
    it('Deveria criar um novo tesouro-usuario', async () =>{
        const body  = {cod_tesouro:"TES1",cod_user: "USR1",valor_invest:120,data_invest: new Date()}
        const response = await request.post('/tesouro').send(body).set('token', TOKEN)
        expect(response.status).toBe(201)
    })

    it('Deveria atualizar um novo tesouro-usuario', async () =>{
        const tesouro  = await TesouroUsuario.create({cod_tesouro:"TES1",cod_user: "USR1",valor_invest:120,data_invest: new Date()})
        const response = await request.put('/tesouro/'+ tesouro._id).send({cod_tesouro: "TES1", cod_user: "USR1", valor_invest: 150, data_invest: new Date()}).set('token', TOKEN) 
        expect(response.status).toBe(204)
    })

    it('Deveria remover um novo tesouro-usuario', async () =>{
        const tesouro  = await TesouroUsuario.create({cod_tesouro:"TES1",cod_user: "USR1",valor_invest:120,data_invest: new Date()})
        const response = await request.delete('/tesouro/'+ tesouro._id).set('token', TOKEN) 
        expect(response.status).toBe(204)
    })

})