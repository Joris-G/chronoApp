import { Component } from '@angular/core';
import { ChronoDisplayComponent } from '../../features/chrono/_components/chrono-display/chrono-display.component';
import { ChronoHeaderComponent } from '../../features/chrono/_components/chrono-header/chrono-header.component';
import { ChronoContentComponent } from '../../features/chrono/_components/chrono-content/chrono-content.component';
import { ChronoCommandsComponent } from '../../features/chrono/_components/chrono-commands/chrono-commands.component';
import { LayoutModule } from '../../_core/_components/layouts/layout.module';
import { PartService } from '../../features/parts/services/part.service';

@Component({
  selector: 'app-chrono',
  standalone: true,
  imports: [LayoutModule, ChronoHeaderComponent, ChronoContentComponent],
  providers: [PartService,],
  templateUrl: './chrono.page.html',
  styleUrl: './chrono.page.scss'
})
export class ChronoPage {

}
