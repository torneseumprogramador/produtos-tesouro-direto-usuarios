const TesouroUsuario = require('../../src/models/Tesouro')

describe('Model tesouro-usuarios', () => {
/*
cod_tesouro: {
    type: String,
    required: true
  },
  cod_user: {
    type: String,
    required: true,
  },
  valor_invest: {
    type: Double,
    required: true,
  },
  data_invest: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
*/
    beforeEach(async () => {
        await TesouroUsuario.deleteMany({

        })
    })
    
    it('Deveria retornar todos os tesouro-usuarios', async () =>{
        const tesourousuario = await TesouroUsuario.find({})
        expect(tesourousuario).toEqual([])
    })

    it('Deveria criar um novo tesouro-usuario', async () =>{
        const tesourousuario = await TesouroUsuario.create({cod_tesouro:"TES1",cod_user: "USR1",valor_invest:120,data_invest: new Date()})
        expect(tesourousuario).toBeDefined()
    })

    it('Deveria atualizar um novo tesouro-usuario', async () =>{
        const oldtesourousuario = await TesouroUsuario.create({cod_tesouro: 'TES01', cod_user: "USR1", valor_invest: 150, data_invest: new Date()})
        const tesourousuario = await TesouroUsuario.findByIdAndUpdate(oldtesourousuario._id,{cod_tesouro:"TES1",cod_user: "USR1",valor_invest:180,data_invest: new Date()})
        expect(tesourousuario).toBeDefined()
    })

    it('Deveria remover um novo tesouro-usuario', async () =>{
        const oldtesourousuario = await TesouroUsuario.create({cod_tesouro: 'TES01', cod_user: "USR1", valor_invest: 150, data_invest: new Date()})
        const removertesourousuario = await TesouroUsuario.findByIdAndRemove(oldtesourousuario._id)
        expect(removertesourousuario).toBeDefined()
    })
    
    it('Deveria mostrar a mensagem de quando comprar', async() => {
        const oldtesourousuario = await TesouroUsuario.create({cod_tesouro: 'TES01', cod_user: "USR1", valor_invest: 150, data_invest: new Date()})
        expect(oldtesourousuario.comprar()).toBe(`Está comprando o tesouro com o código ${oldtesourousuario.cod_tesouro}`)
    })
    
    it('Deveria mostrar a mensagem de quando resgatar', async() => {
        const oldtesourousuario = await TesouroUsuario.create({cod_tesouro: 'TES01', cod_user: "USR1", valor_invest: 150, data_invest: new Date()})
        expect(oldtesourousuario.resgatar()).toBe(`Está resgatando o tesouro com o código ${oldtesourousuario.cod_tesouro}`)
    })
    
    it('Deveria mostrar a mensagem de quando devolver', async() => {
        const oldtesourousuario = await TesouroUsuario.create({cod_tesouro: 'TES01', cod_user: "USR1", valor_invest: 150, data_invest: new Date()})
        expect(oldtesourousuario.devolucao()).toBe(`Está recebendo o tesouro com o código ${oldtesourousuario.cod_tesouro}`)
    })


})