import { Estudante } from "../classes/estudante"

export interface IEstudante {
    criarEstudante(estudante: Estudante): Promise<void>
    buscarEstudanteAtivos(): Promise<[]>
    mudarEstudanteModulo(idEstudanteAntigo: string, idEstudanteNovo: string): boolean
}