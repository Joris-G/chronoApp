import { inject, Injectable, isDevMode, signal } from '@angular/core';
import { catchError, delay, map, mergeMap, Observable, of, throwError } from 'rxjs';
import { ChronoList, CreatePartPayload, Part, PartList } from '../models';
import { HttpClient } from '@angular/common/http';
import { CRUD } from '../../../_core/CRUD.type';
import { toObservable } from '@angular/core/rxjs-interop';



let parts: PartList = [
  {
    id: '1',
    designation: 'INBOARD FLAP UPPER SKIN LH',
    partNumber: 'F46C51241211A1',
    project: 'F10X - VOILURES',
    chronoList: [{
      id: 0,
      startDate: new Date(2024, 10, 1),
      endDate: new Date(2024, 10, 3),
      totalDuration: 0,
      steps: []
    },
    {
      id: 1,
      startDate: new Date(2024, 10, 4),
      endDate: new Date(2024, 10, 5),
      totalDuration: 0,
      steps: []
    }]
  },
  {
    id: '2',
    designation: 'OUTBOARD FLAP LOWER SKIN 1 RH',
    partNumber: 'F46C51241214A1',
    project: 'F10X - VOILURES',
    chronoList:
      [{
        id: 0,
        startDate: new Date(2024, 11, 1),
        endDate: new Date(2024, 11, 3),
        totalDuration: 0,
        steps: []
      }]
  },
  {
    id: '3',
    designation: 'OUTBOARD FLAP LOWER SKIN 4 RH',
    partNumber: 'F46C51242212A1',
    project: 'F10X - VOILURES',
  },
  {
    id: '4',
    designation: 'CARENAGE CENTRAL RH',
    partNumber: 'F8XZ9851242212A1',
    project: 'F8X - CANOE',
  }
];


@Injectable({
  providedIn: 'root'
})
export class PartService implements CRUD<Part> {

  parts$$ = signal<PartList>(parts);

  private readonly http = inject(HttpClient);


  constructor() {
    // this.getFilters();
  }



  createOne(partToAdd: CreatePartPayload): Observable<Part> {
    // TODO Retirer le delay et la génération de l'erreur
    if (isDevMode()) {
      return of(partToAdd).pipe(
        delay(1000),
        mergeMap(partToAdd => {
          if (Math.random() > 0.5) {
            return throwError(() => new Error('Une erreur est survenue!'));
          } else {

            const newId = this.parts$$().length + 1
            const newPart: Part = { ...partToAdd, id: newId.toString() };

            this.parts$$.update((previousValues) => [...previousValues, newPart])
            return of(newPart); // Si pas d'erreur, retourner la valeur
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
    const part = this.parts$$().find(element => element.id === id);
    if (part) {
      return of(part);
    } else {
      return throwError(() => new Error(`Part with id ${id} not found`));
    }
  }


  deleteOne(id: string): Observable<void> {
    if (isDevMode()) {
      return of(null).pipe(
        delay(1000), // Simulation de délai
        map(() => {
          const parts = this.parts$$();
          const updatedParts = parts.filter(part => part.id !== id); // Retirer la pièce par son ID
          this.parts$$.set(updatedParts); // Mettre à jour le signal
        }),
        catchError(() => throwError(() => new Error(`Erreur lors de la suppression de la pièce avec l'ID ${id}`)))
      );
    }
    // Si en production, faire un appel API pour supprimer la pièce
    return this.http.delete<void>(`/api/parts/${id}`).pipe(
      map(() => {
        const parts = this.parts$$();
        const updatedParts = parts.filter(part => part.id !== id); // Filtrer les pièces
        this.parts$$.set(updatedParts); // Mettre à jour le signal après suppression
      })
    );
  }

  updateOne(id: string, updatedObject: Part): Observable<Part> {
    if (isDevMode()) {
      return of(updatedObject).pipe(
        delay(1000), // Simulation de délai en mode dev
        map(() => {
          const parts = this.parts$$();
          const index = parts.findIndex(part => part.id === id);
          if (index > -1) {
            // Mettre à jour la pièce dans le tableau
            const updatedParts = [...parts];
            updatedParts[index] = { ...updatedParts[index], ...updatedObject };
            this.parts$$.set(updatedParts); // Mise à jour du signal
            return updatedObject;
          } else {
            throw new Error(`Part avec l'ID ${id} non trouvée`);
          }
        }),
        catchError(() => throwError(() => new Error('Erreur lors de la mise à jour de la pièce')))
      );
    }
    // Si en production, faire un appel API pour mettre à jour la pièce
    return this.http.put<Part>(`/api/parts/${id}`, updatedObject).pipe(
      map((updatedPart) => {
        const parts = this.parts$$();
        const index = parts.findIndex(part => part.id === id);
        if (index > -1) {
          const updatedParts = [...parts];
          updatedParts[index] = updatedPart; // Mettre à jour la pièce dans le signal
          this.parts$$.set(updatedParts);
          return updatedPart;
        } else {
          throw new Error(`Part avec l'ID ${id} non trouvée`);
        }
      })
    );
  }

  getPartChronos(partId: string): ChronoList {
    return parts.find(part => part.id == partId)?.chronoList || [];
  }
}
