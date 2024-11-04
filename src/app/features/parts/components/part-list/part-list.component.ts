import { AfterViewInit, Component, computed, input, output, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { Part, PartList } from '../../models';
import { RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
@Component({
  selector: 'app-part-list',
  standalone: true,
  imports: [AsyncPipe, RouterModule, MatListModule, MatIcon, MatDivider, MatTableModule, MatSortModule],
  templateUrl: './part-list.component.html',
  styleUrl: './part-list.component.scss'
})
export class PartListComponent implements AfterViewInit {

  partList = input<PartList>([])
  selectedPart = output<Part>();
  //TODO displayedColumns = Object.keys({} as Part) as (keyof Part)[];
  displayedColumns: (keyof Part)[] = ['id', 'designation', 'partNumber', 'project'];

  datasource$$ = computed(() => new MatTableDataSource<any>(this.partList()))
  //TODO transformer en viewChil signal
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit(): void {
    this.datasource$$().sort = this.sort;
  }

  onPartClick(part: Part) {
    this.selectedPart.emit(part);
  }
}
