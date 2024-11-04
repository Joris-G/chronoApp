import { Component } from '@angular/core';
import { PartCreationComponent } from '../../features/parts/components/part-creation/part-creation.component';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { PartListContainerComponent } from '../../features/parts/components/part-list-container/part-list-container.component';
import { PartCommandsComponent } from '../../features/parts/components/part-commands/part-commands.component';
import { RouterOutlet } from '@angular/router';
import { StepAnalyseComponent } from '../../features/chrono/_components/step-analyse/step-analyse.component';
import { LayoutModule } from "../../_core/_components/layouts/layout.module";
import { ContentComponent } from "../../_core/_components/layouts/content/content.component";


@Component({
  selector: 'app-part',
  standalone: true,
  imports: [RouterOutlet, LayoutModule, PartCreationComponent, AsyncPipe, MatGridListModule, PartCommandsComponent, PartListContainerComponent, PartCreationComponent, StepAnalyseComponent],
  // imports: [RouterOutlet, PartCreationComponent, AsyncPipe, MatGridListModule, PartCommandsComponent, PartListContainerComponent, PartCreationComponent, StepAnalyseComponent],
  templateUrl: './part.page.html',
  styleUrl: './part.page.scss'
})
export class PartPage {

  newPartEmit($event: any) {
    // this.partService.addAPart($event);
    // this.partList = this.partService.parts;
  }

}
