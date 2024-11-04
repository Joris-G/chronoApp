import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'iterable',
    standalone: true
})
export class IterablePipe implements PipeTransform {
    transform(value: Set<any>): any[] {
        return Array.from(value);  // Convertit le Set en tableau
    }
}