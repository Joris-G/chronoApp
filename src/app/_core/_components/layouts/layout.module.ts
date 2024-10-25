import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./header/header.component";



@NgModule({
    declarations: [],
    imports: [CommonModule, ContentComponent,
        HeaderComponent],
    exports: [ContentComponent,
        HeaderComponent],
    providers: [],
})
export class LayoutModule { }