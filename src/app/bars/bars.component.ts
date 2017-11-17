import { Component, OnInit } from '@angular/core';

import { Bar }  from '../bar';
import { BARS } from '../mock-bars';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})

export class BarsComponent implements OnInit {

  bars = BARS;

  selectedBar: Bar;

  drinkImg = 'https://mattsko.files.wordpress.com/2015/05/lucille-drunk.gif';

  constructor() { }

  ngOnInit() {
    
  }

  onSelect(bar: Bar): void {
    this.selectedBar = bar;
  }  

  onClose() {
    this.selectedBar = null;
  }

  onDrink(bar: Bar): void {
    
    let originalImg = bar.image_url;
    
    bar.image_url = this.drinkImg
    
    setTimeout(function() {
      bar.image_url = originalImg;
    }, 2000);
  
  }

}

