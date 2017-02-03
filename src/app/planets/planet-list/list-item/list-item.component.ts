import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() planet:any;
  @Output() onPlanetSelected:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  planetSelected() {
    this.onPlanetSelected.emit(this.planet);
  }

}
