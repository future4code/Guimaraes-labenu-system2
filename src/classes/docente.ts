import { IDocente } from "../interfaces/IDocente";
import { Pessoa } from "./pessoa";
import { DocenteServices } from "../core/services/DocenteServices";

export class Docente extends DocenteServices implements IDocente {
    public nome?: string
    public email?: string
    public dataNascimento?: number
    public turma_Id?: string
    

    constructor (nome?: string, email?: string, dataNascimento?: number, turma_Id?: string){
        super()
        this.nome = nome,
        this.email = email,
        this.dataNascimento = dataNascimento,
        this.turma_Id = turma_Id
    }

    async criarDocente(Docente: Docente): Promise<void> {
        this.createDocente(Docente)
    }

    async buscarDocente(): Promise<[]> {
        return  await this.all()
    }

  
}