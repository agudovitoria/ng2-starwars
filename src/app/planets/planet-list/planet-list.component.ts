import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../../core/swapi.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-planet-list',
    templateUrl: './planet-list.component.html',
    styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
    planets:any = [];

    constructor(private swapiService:SwapiService, private router:Router) {}

    ngOnInit() {
        this.swapiService
            .getPlanets()
            .then((data) => {
                this.planets = data.results;
            });
    }

    goToPlanetDetails(planet) {
        const splittedUrl:any = planet.url.split('/');
        splittedUrl.pop();
        const id:any = splittedUrl.pop();
        const commands:any = ['planets', id];
        const navigationExtras:any = {};
        console.log('Planeta seleccionado', planet);
        console.log(`Redireccionando a ${commands.join('/')}`);
        this.router.navigate(commands, navigationExtras);
    }

}
