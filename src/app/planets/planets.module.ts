import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { CommonModule } from "@angular/common";
import { PlanetListComponent } from './planet-list/planet-list.component';
import { RouterModule } from "@angular/router";

import { routes } from './planets.routes';
import { PopulationPipe } from './population.pipe';
import { ListItemComponent } from './planet-list/list-item/list-item.component';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsPageComponent } from './planets-page/planets-page.component';
import { PaginationComponent } from '../core/pagination/pagination.component';

@NgModule({
    declarations: [
        PlanetListComponent,
        PopulationPipe,
        ListItemComponent,
        PlanetComponent,
        PlanetsPageComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CoreModule.forChild()
    ],
    providers: [],
    bootstrap: []
})
export class PlanetsModule {
}
