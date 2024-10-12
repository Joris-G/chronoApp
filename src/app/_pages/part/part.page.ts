import { Component, inject } from '@angular/core';
import { PartCreationComponent } from '../../features/parts/components/part-creation/part-creation.component';
import { AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { PartComponent } from '../../features/parts/components/part/part.component';
import { PartListContainerComponent } from '../../features/parts/components/part-list-container/part-list-container.component';


@Component({
  selector: 'app-part',
  standalone: true,
  imports: [PartCreationComponent, AsyncPipe, MatButtonModule, MatIcon, MatGridListModule, PartComponent, PartListContainerComponent],
  templateUrl: './part.page.html',
  styleUrl: './part.page.scss'
})
export class PartPage {
  readonly dialog = inject(MatDialog);
  openPartCreationDialog(): void {
    this.dialog.open(PartCreationComponent, {
      enterAnimationDuration: '200',
      exitAnimationDuration: '100',
    });
  }
  newPartEmit($event: any) {
    // this.partService.addAPart($event);
    // this.partList = this.partService.parts;
  }

}
