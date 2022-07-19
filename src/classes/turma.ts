import { idText } from "typescript"
import { Docente } from "./docente"
import { Estudante } from "./estudante"

export class Turma {
    public id: string
    public nome: string
    public docente: string []
    public estudante: string []
    public modulo: number

    constructor (id: string, nome: string, docente: string [], estudante: string [], modulo: number){

        this.id = id,
        this.nome = nome,
        this.docente = docente,
        this.estudante = estudante,
        this.modulo = modulo
    }

}
