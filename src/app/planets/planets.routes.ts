import { Routes } from "@angular/router";
import { PlanetListComponent } from "./planet-list/planet-list.component";
import { PlanetComponent } from "./planet/planet.component";
import { PlanetsPageComponent } from "./planets-page/planets-page.component";
export const routes: Routes = [
    {
        path: '',
        component: PlanetsPageComponent,
        children: [
            {
                path: '',
                component: PlanetListComponent
            }, {
                path: ':id',
                component: PlanetComponent
            }
        ]
    }
];