import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Bar }  from '../bar';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.css']
})

export class BarDetailComponent implements OnInit {

  @Input() bar: Bar;
  @Output() close = new EventEmitter();

  constructor() { }
  
  onModalClosed() {
    this.close.emit();
  }

  ngOnInit() {
  
  }

}
