import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../../core/swapi.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planet:any = {};

  constructor(private swapiService:SwapiService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    debugger;
    const id:number = 3;
    this.swapiService.getPlanet(id);
  }

}
