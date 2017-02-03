import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage:number;
  @Input() totalPages:number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changesObject:any) {
    if(changesObject.numPages){
      this.numPages = changesObject.numPages.currentValue;
    }
  }

}
