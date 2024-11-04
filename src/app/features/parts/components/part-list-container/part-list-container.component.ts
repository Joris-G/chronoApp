import { Component, computed, inject, OnInit } from '@angular/core';
import { PartListComponent } from '../part-list/part-list.component';
import { PartListFilterComponent } from '../part-list-filter/part-list-filter.component';
import { Part } from '../../models';
import { Router } from '@angular/router';
import { PartService } from '../../services/part.service';
import { FilterOptions } from '../../../../_core/select.interface';
import { FilterService } from '../../services/part-filter.service';

@Component({
  selector: 'app-part-list-container',
  standalone: true,
  imports: [PartListComponent, PartListFilterComponent],
  templateUrl: './part-list-container.component.html',
  styleUrl: './part-list-container.component.scss'
})
export class PartListContainerComponent implements OnInit {

  private readonly router = inject(Router)
  private readonly partFilterService = inject(FilterService);

  partList$$ = this.partFilterService.filteredPartList$$;
  partFilters = computed(() => this.partFilterService.filters$$());

  ngOnInit(): void {
    this.partFilterService.updateAvailableFilters();
  }

  partSelectedAction(selectedPart: Part) {
    this.router.navigate(['/piece', selectedPart.id]);
  }

  handleSelectionChange(selectedValue: FilterOptions) {
    this.partFilterService.updateFilteredList(selectedValue);
    // this.partFilterService.setFilteredPartList(selectedValue);
    // Vous pouvez faire d'autres traitements ici
  }

}
