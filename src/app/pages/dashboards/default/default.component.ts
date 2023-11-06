import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {

  breadCrumbItems: Array<{}>;

  constructor() { }
 
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Utility' }, { label: 'Starter Page', active: true }];
  }

}
