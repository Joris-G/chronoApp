import { Component, inject, signal } from '@angular/core';
import { ChronoCommandsComponent } from '../chrono-commands/chrono-commands.component';
import { ChronoDisplayComponent } from '../chrono-display/chrono-display.component';
import { PartListComponent } from '../../../parts/components/part-list/part-list.component';
import { ChronoList, Part } from '../../../parts/models';
import { PartService } from '../../../parts/services/part.service';
import { ChronoListComponent } from '../chrono-list/chrono-list.component';

@Component({
  selector: 'app-chrono-content',
  standalone: true,
  imports: [ChronoCommandsComponent, ChronoDisplayComponent, PartListComponent, ChronoListComponent],
  templateUrl: './chrono-content.component.html',
  styleUrl: './chrono-content.component.scss'
})
export class ChronoContentComponent {
  isPartSelected = signal(false);
  private readonly partService = inject(PartService);
  partChronos: ChronoList = [];

  partSelected($event: Part) {
    this.isPartSelected.set(true);
    this.partChronos = this.partService.getPartChronos($event.id);
  }

}
