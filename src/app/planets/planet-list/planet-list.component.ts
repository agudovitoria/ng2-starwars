import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../../core/swapi.service";

@Component({
    selector: 'app-planet-list',
    templateUrl: './planet-list.component.html',
    styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
    planets:any = [];

    constructor(private swapiService:SwapiService) {}

    ngOnInit() {
        this.swapiService
            .getPlanets()
            .then((data) => {
                this.planets = data.results;
            });
    }

}
