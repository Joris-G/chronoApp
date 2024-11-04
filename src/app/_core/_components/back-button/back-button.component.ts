import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../_service/navigation.service';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {
  private readonly navService: NavigationService = inject(NavigationService);
  goBack() {
    this.navService.goBack();
  }

}
