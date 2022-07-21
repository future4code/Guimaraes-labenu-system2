import { Turma } from "./classes/turma";
import { app } from "./app";
import { Request, Response } from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerFileDocument from './docs/swagger.json'

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFileDocument))

const version: string = "v1"

app.get(`/${version}/buscarTurmasAtivas`, async (req: Request, res: Response ) =>{
    try {
        const turma = new Turma()
        await turma.buscarTurmaAtivas()
        .then( response => res
        .status(200).send(response) )
        .catch( e =>   res.status(500).send({message: "Ocorreu um erro de sql ", result: e }) )
    } catch (e) {
        res.status(500).send({ message: 'Error', result: e })
    }
})

// async function create(){
//     const newTurma = new Turma("Guimaraes w",1)
//     await newTurma.criarTurma(newTurma).then(response => console.log("meu respons", response)).catch(e=> console.log("error", e))
// }

// create()

// await newTurma.criarTurma(newTurma).then(response => console.log("meu respons", response)).catch(e=> console.log("error", e))