import { Component, inject, input, signal } from '@angular/core';
import { PartService } from '../../services/part.service';
import { AsyncPipe } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { PartList } from '../../models';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-part-list',
  standalone: true,
  imports: [AsyncPipe, MatList, MatListItem, MatIcon, MatDivider],
  templateUrl: './part-list.component.html',
  styleUrl: './part-list.component.scss'
})
export class PartListComponent {
  partList = input<PartList>();
  private readonly partService = inject(PartService);
  partList$$ = this.partService.parts$$;
}
