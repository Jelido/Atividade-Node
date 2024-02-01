import  express  from "express"
import { router } from "./routes/cervejas.js"
import { sequelize } from "./database.js"

try {
    sequelize.sync()
} catch(erro) {
    console.log(erro)
}

const app = express()
app.use(express.json())
app.use(router)
app.listen(3003, () => console.log('Servidor iniciado'))