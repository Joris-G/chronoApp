import { inject, Injectable, signal } from '@angular/core';
import { Part, PartList } from '../models';
import { FilterOptions } from '../../../_core/select.interface';
import { PartService } from './part.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService<T> {
  filteredPartList$$ = signal<PartList>([]);
  filters$$ = signal<FilterOptions>({});

  private readonly partService = inject(PartService);

  constructor() {
    this.updateFilteredList();
    this.updateAvailableFilters();

  }
  updateAvailableFilters(): void {
    const parts = this.filteredPartList$$();
    const updatedFilters: FilterOptions = {};

    parts.forEach(part => {
      Object.keys(part).forEach(key => {
        const value = part[key as keyof Part];
        if (value !== null && typeof value !== 'object') {
          if (!updatedFilters[key]) updatedFilters[key] = new Set();
          updatedFilters[key].add(value);
        }
      });
    });

    this.filters$$.set(updatedFilters);
  }

  updateFilteredList(selectedFilters?: FilterOptions): void {
    const allParts = this.partService.parts$$();

    if (!selectedFilters || Object.keys(selectedFilters).length === 0) {
      this.filteredPartList$$.set(allParts);
    } else {
      const filteredParts = allParts.filter(part =>
        Object.entries(selectedFilters).every(([key, allowedValues]) =>
          (allowedValues as Set<any>).has(part[key as keyof Part])
        )
      );
      this.filteredPartList$$.set(filteredParts);
    }

    // Mise à jour dynamique des filtres en fonction des éléments actuellement filtrés
    this.updateAvailableFilters();
  }

  // getFilters(): void {
  //   const parts = this.partService.parts$$();
  //   const filters: FilterOptions = {};

  //   parts.forEach(part => {
  //     Object.keys(part).forEach((key) => {
  //       const value = part[key as keyof Part];

  //       if (value !== null && typeof value !== 'object') {

  //         if (!filters[key]) {
  //           filters[key] = new Set();
  //         }
  //         filters[key].add(value);
  //       }
  //     });
  //   });

  //   this.filters$$.set(filters);
  // }

  // setFilteredPartList(selectedFilters?: FilterOptions): void {
  //   const originalParts = this.partService.parts$$();
  //   if (!selectedFilters || Object.keys(selectedFilters).length <= 0) {
  //     this.filteredPartList$$.set(originalParts);
  //     return
  //   }
  //   else {
  //     const filterKeys = Object.keys(selectedFilters) as (keyof Part)[];
  //     const filterValues = Object.values(selectedFilters);
  //     const filteredParts = originalParts.filter(part =>
  //       filterKeys.every((field, index) => {

  //         const fieldValueSet = new Set(filterValues[index]);
  //         return fieldValueSet.has(part[field]);

  //       })
  //     );

  //     this.filteredPartList$$.set(filteredParts);
  //   }

  // }
}
