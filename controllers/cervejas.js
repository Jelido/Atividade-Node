import  { Cerveja } from '../models/cerveja.js'

const CriarCerveja = async (req,res) => {
    try{
        const { nome, tipo, nacionalidade, abv } = req.body
        if(!nacionalidade || !nome || !tipo || !abv) {
            return res.status(400).json({error: "Dados imcompletos" })
        }
        const novaCerveja = { nome, tipo, nacionalidade, abv }
        const resultado = await Cerveja.create(novaCerveja)
        res.status(201).send({ message: 'Cerveja criada com sucesso', data: resultado })
    } catch(erro){
        res.status(500).send({ error: 'Erro ao criar cerveja' })
    }
}

const GetCerveja = async (req,res) => {
    try{
        const cervejas = await Cerveja.findAll()
        res.status(200).send({ message: 'Cervejas encontradas', data: cervejas})
    } catch(erro){
        res.status(500).send({ message: 'Houve um erro na busca' })
    }
 }

const AtualizarCerveja = async (req,res) => { 
    try{
        const { id } = req.params
        const { nome, tipo, nacionalidade, abv } = req.body
        if(!nacionalidade ||!nome ||!tipo ||!abv) {
            return res.status(400).json({error: "Dados imcompletos" })
        }
        const cervejaAtualizada = { nome, tipo, nacionalidade, abv }
        const resultado = await Cerveja.update(cervejaAtualizada, { where: { id } })
        res.status(200).send({ message: 'Cerveja atualizada com sucesso', data: resultado })
 } catch (erro){
    res.status(500).send({ error: 'Erro ao atualizar cerveja' })
 }
}

const DeletarCerveja = async (req,res) => { 
    try{
        const { id } = req.params
        if(!id){
            return res.status(400).json({error: "Id não informado" })
        }
        const resultado = await Cerveja.destroy({ where: { id } })
        res.status(200).send({ message: 'Cerveja deletada com sucesso'})
 } catch (erro){
    res.status(500).send({ error: 'Erro ao excluir a cerveja'})
 }
}

const getCervejaPeloId = async (req, res) => {
    try{
        const { id } = req.params
        if(!id){
            return res.status(400).json({error: "Id não informado" })
        }
        const cerveja = await Cerveja.findByPk(id)
        if(cerveja){
            res.status(200).send({ message: 'Cerveja encontrada', data: cerveja})
        } else {
            res.status(404).send({ message: 'Cerveja não encontrada'})
        }
    } catch (erro){
        res.status(500).send({ error: 'Erro ao buscar cerveja'})
    }
}

export { CriarCerveja, GetCerveja, AtualizarCerveja, DeletarCerveja, getCervejaPeloId } 