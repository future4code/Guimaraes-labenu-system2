import { ClassElement } from "typescript";
import { IRepositoryBase } from "../repositoryInterfaces/IRepositoryBase";
import { connection } from "../../data/connection";
import { create } from "domain";
import { promises } from "dns";
import { table } from "console";

export class RepositoryBase implements IRepositoryBase{

    async findAll(tableName: string): Promise<[]> {
        return await connection.from(tableName).select("*").where({ ativo: 1 }) as any
    }

    async create(tableName: string, objectClass: object ): Promise<object> {
       return await connection.from(tableName).insert(objectClass)
    }

    update(tableName: string, id: number): boolean{
        return false
    }

    updateDocente(tableName: string, idDocente: number, idTurma: number): boolean{
       try {
        connection(tableName).update({
            turma_id: idTurma
        }).where({
            id: idDocente
        })
        return true
       } catch (error) {
        return false        
       }
    }
}