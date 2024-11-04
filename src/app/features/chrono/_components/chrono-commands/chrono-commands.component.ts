import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ChronoService } from '../../_service/chronoService';

@Component({
  selector: 'app-chrono-commands',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './chrono-commands.component.html',
  styleUrl: './chrono-commands.component.scss'
})
export class ChronoCommandsComponent {
  private readonly chronoService = inject(ChronoService);

  start() {
    this.chronoService.start();
  }

  pause() {
    this.chronoService.pause();
  }

  nextStep() {
    this.chronoService.nextStep();
  }

}
