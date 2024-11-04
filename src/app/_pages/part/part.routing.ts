import { Routes } from "@angular/router";
import { PartCreationComponent } from "../../features/parts/components/part-creation/part-creation.component";
import { PartListContainerComponent } from "../../features/parts/components/part-list-container/part-list-container.component";


export const PartRoutes: Routes = [
    {
        path: 'create',
        component: PartCreationComponent,
    },
    {
        path: ':id',
        component: PartCreationComponent,
    },
    {
        path: '',
        component: PartListContainerComponent
    },
]