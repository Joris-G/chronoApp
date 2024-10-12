import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './not-found.page.html',
  styleUrl: './not-found.page.scss'
})
export class NotFoundPage {

}
