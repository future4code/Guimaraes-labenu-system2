import { Turma } from "./classes/turma";
import { app } from "./app";
import { Request, response, Response } from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerFileDocument from './docs/swagger.json'
import { request } from "http";
import { Docente } from './classes/docente'
import { Estudante } from "./classes/estudante";
import moment from "moment";

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFileDocument))

const version: string = "v1"


app.post(`/${version}/criarTurma`, async (req: Request, res: Response) => {
    const {nome, modulo_Id } = req.body as any
       
    const turma = new Turma(nome, modulo_Id, 1)     
    const result: any =  await turma.createTurma(turma)
     res.status(200).send({ message: "OK", result: result[0] })
})

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
    const result: any =  await docente.criarDocente(docente)
     res.status(200).send({ message: "OK", result: result[0] })
})


app.get(`/${version}/buscarEstudantes`, async (req: Request, res: Response ) =>{
    try {
        const estudante = new Estudante()
        await estudante.buscarEstudanteAtivos()
        .then( response => res
        .status(200).send(response) )
        .catch( e =>   res.status(500).send({message: "Ocorreu um erro de sql ", result: e }) )
    } catch (e) {
        res.status(500).send({ message: 'Error', result: e })
    }
})