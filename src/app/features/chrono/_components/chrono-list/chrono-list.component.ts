import { Component, input } from '@angular/core';
import { ChronoList } from '../../../parts/models';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chrono-list',
  standalone: true,
  imports: [MatListModule, DatePipe],
  templateUrl: './chrono-list.component.html',
  styleUrl: './chrono-list.component.scss'
})
export class ChronoListComponent {
  chronoList = input<ChronoList>([]);

}
