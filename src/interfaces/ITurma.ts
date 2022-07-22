import { Turma } from "../classes/turma"

export interface ITurma {
    criarTurma(turma: Turma): Promise<object>
    buscarTurmaAtivas(): Promise<[]>
    mudarTurmaModulo(idTurmaAntiga: string, idTurmaNova: string): boolean
}