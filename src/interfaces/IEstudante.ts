import { Estudante } from "../classes/estudante"

export interface IEstudante {
    criarEstudante(estudante: Estudante): Promise<object>
    buscarEstudanteAtivos(): Promise<[]>
    mudarEstudanteModulo(idEstudanteAntigo: string, idEstudanteNovo: string): boolean
}