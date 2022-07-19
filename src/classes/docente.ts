import { Pessoa } from "./pessoa";

export class Docente extends Pessoa {
    private especialidades: string []

    constructor(id: string, name: string, email: string, data_nasc: number, turma_id: string, especialidades: []) {
        super(id, name, email, data_nasc, turma_id)

        this.especialidades = especialidades
    }
}