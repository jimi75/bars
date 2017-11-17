import { Component, OnInit } from '@angular/core';

import { Bar }        from '../bar';
import { BARS }       from '../mock-bars';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})

export class BarsComponent implements OnInit {

  selectedBar: Bar;
  bars: Bar[];
  drinkImg: string;

  constructor(
    private barService: BarService
  ) { }

  getBars(): void {
    this.barService.getBars()
      .subscribe(bars => this.bars = bars);
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

  ngOnInit() {
    this.drinkImg = 'https://mattsko.files.wordpress.com/2015/05/lucille-drunk.gif';
    this.getBars();
  }

}
