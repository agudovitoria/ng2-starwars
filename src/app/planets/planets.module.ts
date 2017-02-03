import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { CommonModule } from "@angular/common";
import { PlanetListComponent } from './planet-list/planet-list.component';
import { RouterModule } from "@angular/router";

import { routes } from './planets.routes';
import { PopulationPipe } from './population.pipe';
import { ListItemComponent } from './planet-list/list-item/list-item.component';

@NgModule({
    declarations: [
        PlanetListComponent,
        PopulationPipe,
        ListItemComponent,
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
