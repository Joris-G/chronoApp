import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../../../../_core/_components/back-button/back-button.component';


@Component({
  selector: 'app-part-commands',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIcon, BackButtonComponent],
  templateUrl: './part-commands.component.html',
  styleUrl: './part-commands.component.scss',
  host:
    { 'class': 'jwd-layout-left-separator' }


})
export class PartCommandsComponent {
  // readonly dialog = inject(MatDialog);
  // openPartCreationDialog(): void {
  //   this.dialog.open(PartCreationComponent, {
  //     enterAnimationDuration: '200',
  //     exitAnimationDuration: '100',
  //   });
  // }
}
