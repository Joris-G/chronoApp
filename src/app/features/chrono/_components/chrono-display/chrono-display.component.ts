import { Component, effect } from '@angular/core';
import { ChronoService } from '../../_service/chronoService';
import { MatIcon } from '@angular/material/icon';
import { TimeFormatPipe } from '../../_pipe/chrono.pipe';

@Component({
  selector: 'app-chrono-display',
  standalone: true,
  imports: [MatIcon, TimeFormatPipe],
  templateUrl: './chrono-display.component.html',
  styleUrl: './chrono-display.component.scss'
})
export class ChronoDisplayComponent {
  displayTime = 0;  // Le temps à afficher
  minutes: string[] = ['0', '0'];
  seconds: string[] = ['0', '0'];

  constructor(public chronoService: ChronoService) {
    // Utilisation d'un effet réactif pour mettre à jour le temps d'affichage
    effect(() => {
      this.displayTime = this.chronoService.time();
    });
  }

  toggleCountdown() {
    this.chronoService.switchMode();
  }
}
