import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './features/layout/components/header/side-bar.component';
import { HttpClient } from '@angular/common/http';
import { LayoutModule } from './_core/_components/layouts/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, LayoutModule],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chronoApp';
}
