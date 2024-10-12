import { Observable } from "rxjs";

export interface CRUD<T> extends GetAll<T>, GetOne<T>, CreateOne<T>, DeleteOne<T>, UpdateOne<T> {

}

/**
 *
 */
export interface GetAll<T> {
    getAll(): Observable<T[]>;
}

/**
 *
 */
export interface GetOne<T> {
    getOne(id: string): Observable<T>;
}

/**
*
*/
export interface CreateOne<T> {
    createOne(objectToCreate: T): Observable<T>;
}

/**
*
*/
export interface UpdateOne<T> {
    updateOne(id: string, updatedObject: T): Observable<T>;
}

/**
*
*/
export interface DeleteOne<T> {
    deleteOne(id: string): Observable<T>;
}
/**
 *
 */
export type StatePanel = 'success' | 'failed';