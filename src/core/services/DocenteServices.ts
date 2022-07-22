import { Docente } from "../../classes/docente";
import { RepositoryBase } from "../repository/RepositoryBase";

export class DocenteServices extends RepositoryBase{
    constructor(){
        super()
    }

    async all(): Promise<[]>{
        return await this.findAll("Docentes")
    }

    async createDocente(docente: Docente): Promise<void>{
        await this.create("Docentes", docente)
    }
    
}