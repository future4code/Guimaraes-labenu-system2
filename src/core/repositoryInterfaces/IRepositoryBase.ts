import { ClassElement } from "typescript"

export interface IRepositoryBase {
    create(tableName: string,  objectClass: Object ):Promise<object>
    // deleteById(id: number):boolean
    // findById<T>(callbackFn: (this: T) => any, thisArg: T): any;
    // findAll<T, TResult>(callbackFn: (this: T) => TResult, thisArg: T): TResult
    findAll(tableName: string): Promise<[]>
    update(tableName: string, id: number): boolean
}