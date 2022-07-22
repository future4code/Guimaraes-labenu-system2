import { Turma } from "../../classes/turma";
import { RepositoryBase } from "../repository/RepositoryBase";

export class TurmaServices extends RepositoryBase{
    constructor(){
        super()
    }

    async all(): Promise<[]>{
        return await this.findAll("Turmas")
    }

    async createTurma(turma: Turma): Promise<void>{
        await this.create("Turmas", turma)
    }
    
}