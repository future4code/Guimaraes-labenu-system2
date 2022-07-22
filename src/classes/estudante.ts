import { IEstudante } from "../interfaces/IEstudante";
import { Pessoa } from "./pessoa";
import { EstudanteServices } from "../core/services/EstudanteServices"


export class Estudante extends EstudanteServices implements IEstudante {
    public id?: number
    public nome?: string
    public email?: string
    public data_nasc?: number
    public turma_id?: string
    public hobbies?: string
    

    constructor(id: number, nome: string, email: string, data_nasc: number, turma_id: string, hobbies: string) {
        super()
        this.id = id,
        this.nome = nome,
        this.email = email,
        this.data_nasc = data_nasc,
        this.turma_id = turma_id,
        this.hobbies = hobbies
    }
    criarEstudante(estudante: Estudante): Promise<void> {
        throw new Error("Method not implemented.");
    }
    buscarEstudanteAtivos(): Promise<[]> {
        throw new Error("Method not implemented.");
    }
    mudarEstudanteModulo(idEstudanteAntigo: string, idEstudanteNovo: string): boolean {
        throw new Error("Method not implemented.");
    }

    async buscarEstudantePorNome(): Promise<[]>{
        return await this.all()
    }
}