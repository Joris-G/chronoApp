import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutModule } from '../../_core/_components/layouts/layout.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LayoutModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
