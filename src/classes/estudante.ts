import { Pessoa } from "./pessoa";


export class Estudante extends Pessoa {
    private hobbies: string []


    constructor(id: string, name: string, email: string, data_nasc: number, turma_id: string, hobbies: []) {
        super(id, name, email, data_nasc, turma_id)

        this.hobbies = hobbies
        
    }

    
}