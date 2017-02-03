import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../../core/swapi.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
    planet: any = {};

    constructor(private swapiService: SwapiService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            const id: number = params.id;
            this.swapiService.getPlanet(id)
                .then((data) => { this.planet = data;});
        });
    }

}
