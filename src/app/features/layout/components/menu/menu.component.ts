import { Component, ElementRef, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';
import { Menu } from '.';
import { MatIconModule } from '@angular/material/icon';
import { MenuService } from '../../_services/menu.service';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, ToggleMenuComponent, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',

})
export class MenuComponent {
  menuItems: Menu = [
    {
      icon: "home",
      label: "Accueil",
      path: "/home",
      disable: false
    },
    {
      icon: 'settings',
      label: 'Pièces',
      path: "/piece",
      disable: false
    },
    {
      icon: 'timer',
      label: 'Chrono',
      path: "/chrono",
      disable: false
    },
    {
      icon: 'monitoring',
      label: 'Stats',
      path: '',
      disable: false
    }

  ];
  private readonly menuservice = inject(MenuService);
  isMenuOpen = this.menuservice.isMenuOpen
}
