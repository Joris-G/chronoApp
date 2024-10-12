import { Component } from '@angular/core';
import { PartListComponent } from '../part-list/part-list.component';
import { PartListFilterComponent } from '../part-list-filter/part-list-filter.component';

@Component({
  selector: 'app-part-list-container',
  standalone: true,
  imports: [PartListComponent, PartListFilterComponent],
  templateUrl: './part-list-container.component.html',
  styleUrl: './part-list-container.component.scss'
})
export class PartListContainerComponent {

}
