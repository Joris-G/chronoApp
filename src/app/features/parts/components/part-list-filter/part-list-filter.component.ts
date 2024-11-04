import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { FilterOptions } from '../../../../_core/select.interface';
import { TitleCasePipe } from '@angular/common';
import { IterablePipe } from '../../../../_core/_pipes/iterrableFromSet';
import { MatIconModule } from '@angular/material/icon';

// export type FilterOptions = { [key: string]: Set<any> };

@Component({
  selector: 'app-part-list-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, TitleCasePipe, IterablePipe, MatIconModule],
  templateUrl: './part-list-filter.component.html',
  styleUrl: './part-list-filter.component.scss'
})
export class PartListFilterComponent {

  private _filters = signal<FilterOptions>({});
  @Input() set filters(value: FilterOptions) {
    this._filters.set(value);
  }

  @Output() selectionChange = new EventEmitter<FilterOptions>();

  selectedFilters: FilterOptions = {};

  // Utilisation de computed pour recalculer les entrées à chaque changement de `filters`
  filterEntries = computed(() => Object.entries(this._filters()));

  onSelectionChange(selectedValues: string[], filterKey: string): void {
    // Met à jour `selectedFilters` en fonction de la sélection
    if (selectedValues.length > 0) {
      this.selectedFilters[filterKey] = new Set(selectedValues);
    } else {
      delete this.selectedFilters[filterKey];
    }

    // Émet les filtres sélectionnés
    this.selectionChange.emit({ ...this.selectedFilters });
  }

  clearClick(select: MatSelect, filterKey: string) {
    select.options.forEach(option => option.deselect());
    this.onSelectionChange([], filterKey);
  }
  resetFilter(): void {
    this.selectedFilters = {};
    this.selectionChange.emit({});
  }
}
