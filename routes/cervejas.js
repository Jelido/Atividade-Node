import express from 'express'
const router = express.Router()
import { CriarCerveja, GetCerveja, AtualizarCerveja, DeletarCerveja, getCervejaPeloId } from '../controllers/cervejas.js'

router.post('/cervejas', CriarCerveja)

router.get('/cervejas',GetCerveja)
router.get('/cervejas/:id', getCervejaPeloId)

router.put('/cervejas/:id',AtualizarCerveja)

router.delete('/cervejas/:id',DeletarCerveja)   

export { router }