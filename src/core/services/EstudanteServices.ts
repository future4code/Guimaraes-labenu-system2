import { Estudante } from "../../classes/estudante";
import { RepositoryBase } from "../repository/RepositoryBase";

export class EstudanteServices extends RepositoryBase{
    constructor(){
        super()
    }

    async all(): Promise<[]>{
        return await this.findAll("Estudantes")
    }

    async createEstudante(estudante: Estudante): Promise<void>{
        await this.create("Estudantes", estudante)
    }
    
}