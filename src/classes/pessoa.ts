interface IPeople {
    id: string,
    nome: string,
    email: string,
    data_nasc: number,
    turma_id: string,
    
}

export class Pessoa implements IPeople {
    constructor(public id: string, public nome: string, public email: string, public data_nasc: number, public turma_id: string) {}
}
