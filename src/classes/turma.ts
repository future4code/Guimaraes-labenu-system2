import { idText } from "typescript"
import { Docente } from "./docente"
import { Estudante } from "./estudante"
import { ITurma } from "../interfaces/ITurma"
import { TurmaServices } from "../core/services/TurmaServices"

export class Turma extends TurmaServices implements ITurma {
    public nome?: string
    public modulo_Id?: number

    constructor (nome?: string, modulo_Id?: number){
        super()
        this.nome = nome,
        this.modulo_Id = modulo_Id
    }

    async criarTurma(turma: Turma): Promise<void> {
        this.createTurma(turma)
    }

    async buscarTurmaAtivas(): Promise<[]> {
        return  await this.all()
    }

   mudarTurmaModulo(idTurmaAntiga: string, idTurmaNova: string): boolean {
       return false
   }

}
