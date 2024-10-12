import { inject, Injectable, isDevMode, signal } from '@angular/core';
import { delay, mergeMap, Observable, of, throwError } from 'rxjs';
import { Part, PartList } from '../models';
import { HttpClient } from '@angular/common/http';
import { CRUD } from '../../../_core/CRUD.type';
import { toObservable } from '@angular/core/rxjs-interop';

let parts: PartList = [
  {
    id: 1,
    designation: 'INBOARD FLAP UPPER SKIN LH',
    partNumber: 'F46C51241211A1'
  },
  {
    id: 2,
    designation: 'OUTBOARD FLAP LOWER SKIN 1 RH',
    partNumber: 'F46C51241214A1'
  },
];


@Injectable({
  providedIn: 'root'
})
export class PartService implements CRUD<Part> {

  parts$$ = signal<PartList>(parts);
  private readonly http = inject(HttpClient);


  createOne(partToAdd: Part): Observable<Part> {
    // TODO Retirer le delay et la génération de l'erreur
    if (isDevMode()) {
      return of(partToAdd).pipe(
        delay(1000),
        mergeMap(partToAdd => {
          if (Math.random() > 0.5) {
            return throwError(() => new Error('Une erreur est survenue!'));
          } else {
            parts = [...parts, partToAdd]
            this.parts$$.update(oldPartList => parts)
            return of(partToAdd); // Si pas d'erreur, retourner la valeur
          }
        })
      );
    }
    return this.http.post<Part>('', partToAdd);
  }

  getAll(): Observable<PartList> {
    return toObservable<PartList>(this.parts$$);
  }

  getOne(id: string): Observable<Part> {
    const part = parts.find(element => element.id === +id);
    if (part) {
      return of(part);
    } else {
      return throwError(() => new Error(`Part with id ${id} not found`));
    }
  }


  deleteOne(id: string): Observable<Part> {
    throw new Error('Method not implemented.');
  }
  updateOne(id: string, updatedObject: Part): Observable<Part> {
    throw new Error('Method not implemented.');
  }
}
