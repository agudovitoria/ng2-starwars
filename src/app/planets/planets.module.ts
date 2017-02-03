import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { PlanetsComponent } from './planets.component';
import { CommonModule } from "@angular/common";
import { PlanetListComponent } from './planet-list/planet-list.component';
import { RouterModule } from "@angular/router";

import { routes } from './planets.routes';

@NgModule({
    declarations: [
        PlanetsComponent,
        PlanetListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CoreModule.forChild()
    ],
    providers: [],
    bootstrap: [PlanetsComponent]
})
export class PlanetsModule {
}
