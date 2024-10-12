import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-single-part',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './part.component.html',
  styleUrl: './part.component.scss'
})
export class PartComponent {

}
