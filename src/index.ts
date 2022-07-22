import { Turma } from "./classes/turma";
import { app } from "./app";
import { Request, Response } from "express";
import { TurmaServices } from "./core/services/TurmaServices";

app.get('/getAllTurma', async (req: Request, res: Response ) =>{
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
