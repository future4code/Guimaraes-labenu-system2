import { IDocente } from "../interfaces/IDocente";
import { Pessoa } from "./pessoa";
import { DocenteServices } from "../core/services/DocenteServices";

export class Docente extends DocenteServices implements IDocente {
    public nome?: string
    public email?: string
    public dataNascimento?: string
    public turma_Id?: string
    public ativo?: number
    

    constructor (nome?: string, email?: string, dataNascimento?: string, turma_Id?: string, ativo?: number){
        super()
        this.nome = nome,
        this.email = email,
        this.dataNascimento = dataNascimento,
        this.turma_Id = turma_Id,
        this.ativo = ativo
    }

    async criarDocente(Docente: Docente): Promise<object> {
       return await this.createDocente(Docente)
    }

    async buscarDocentes(): Promise<[]> {
        return  await this.all()
    }

  
}