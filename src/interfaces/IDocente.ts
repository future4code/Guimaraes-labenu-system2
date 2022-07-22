import { Turma } from "../classes/turma"

export interface ITurma {
    criarTurma(turma: Turma): Promise<void>
    buscarTurmaAtivas(): Promise<[]>
    mudarTurmaModulo(idTurmaAntiga: string, idTurmaNova: string): boolean
}