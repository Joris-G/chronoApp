import { Component, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuService } from '../../_services/menu.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MenuComponent, MatToolbarModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  host: {
    'class': 'jwd-layout-bottom-separator'
  }
})
export class SideBarComponent {
  private readonly menuService = inject(MenuService);
  menuOpen = this.menuService.isMenuOpen;
}
