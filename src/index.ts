import { Turma } from "./classes/turma";
import { app } from "./app";
import { Request, response, Response } from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerFileDocument from './docs/swagger.json'
import { request } from "http";
import { Docente } from './classes/docente'
import moment from "moment";

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

app.get(`/${version}/buscarDocentes`, async (req: Request, res: Response ) =>{
    try {
        const docente = new Docente()
        await docente.buscarDocentes()
        .then( response => res
        .status(200).send(response) )
        .catch( e =>   res.status(500).send({message: "Ocorreu um erro de sql ", result: e }) )
    } catch (e) {
        res.status(500).send({ message: 'Error', result: e })
    }
})

app.post(`/${version}/criarDocente`, async (req: Request, res: Response) => {
     const {nome, email, dataNascimento, turma_Id} = req.body as any
     
     
     const newdataNascimento = moment(dataNascimento).format("YYYY-MM-DD")
     
     const docente = new Docente(nome, email, newdataNascimento, turma_Id, 1)
     
     await docente.criarDocente(docente)
     res.status(200).send("deu certo")
})


// async function create(){
//     const newTurma = new Turma("Guimaraes w",1)
//     await newTurma.criarTurma(newTurma).then(response => console.log("meu respons", response)).catch(e=> console.log("error", e))
// }

// create()

// await newTurma.criarTurma(newTurma).then(response => console.log("meu respons", response)).catch(e=> console.log("error", e))
