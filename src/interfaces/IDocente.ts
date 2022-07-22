import { Docente } from "../classes/docente"

export interface IDocente {
    criarDocente(turma: Docente): Promise<object>
}