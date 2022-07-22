import { ClassElement } from "typescript";
import { IRepositoryBase } from "../repositoryInterfaces/IRepositoryBase";
import { connection } from "../../data/connection";
import { create } from "domain";
import { promises } from "dns";
import { Turma } from "../../classes/turma";

export class RepositoryBase implements IRepositoryBase{

    async findAll(tableName: string): Promise<[]> {
        return await connection.from(tableName).select("*").where({ ativo: 1 }) as any
    }

    async create(tableName: string, objectClass: Turma ): Promise<void> {
       await connection.from(tableName).insert(objectClass)
    }

    update(tableName: string, id: number): boolean{
        return false
    }
}