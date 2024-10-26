import { Component, inject } from '@angular/core';
import { MenuService } from '../../../_services/menu.service';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toggle-menu',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './toggle-menu.component.html',
  styleUrl: './toggle-menu.component.scss'
})
export class ToggleMenuComponent {
  private readonly menuService = inject(MenuService);
  isMenuOpen = this.menuService.isMenuOpen
  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
