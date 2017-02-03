import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { CommonModule } from "@angular/common";
import { PlanetListComponent } from './planet-list/planet-list.component';
import { RouterModule } from "@angular/router";

import { routes } from './planets.routes';
import { PopulationPipe } from './population.pipe';

@NgModule({
    declarations: [
        PlanetListComponent,
        PopulationPipe,
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
