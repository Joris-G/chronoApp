import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PartCreationComponent } from '../part-creation/part-creation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-part-commands',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIcon,],
  templateUrl: './part-commands.component.html',
  styleUrl: './part-commands.component.scss',
  host:
    { 'class': 'jwd-layout-left-separator' }


})
export class PartCommandsComponent {
  readonly dialog = inject(MatDialog);
  openPartCreationDialog(): void {
    this.dialog.open(PartCreationComponent, {
      enterAnimationDuration: '200',
      exitAnimationDuration: '100',
    });
  }
}
