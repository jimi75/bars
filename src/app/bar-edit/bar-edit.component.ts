import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router}  from '@angular/router';
import { Location }               from '@angular/common';

import { Bar }            from '../bar';
import { BarService }     from '../bar.service';

@Component({
  selector: 'app-bar-edit',
  templateUrl: './bar-edit.component.html',
  styleUrls: ['./bar-edit.component.css']
})

export class BarEditComponent implements OnInit {

  zombies: Array<string> = [
    'http://placezombie.com/245x245',
    'http://placezombie.com/255x255',
    'http://placezombie.com/265x265',
    'http://placezombie.com/275x275',
    'http://placezombie.com/282x282',
    'http://placezombie.com/305x305'
  ];

  bar: Bar;
  selectedZombie: string;

  constructor(
    private route: ActivatedRoute,
    private barService: BarService,
    private location: Location,
  ) {}

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.barService.getBar(id)
      .subscribe(bar => { 
        this.bar = bar
      });
  }

  onZombieSelected(zombie): void {
    this.selectedZombie = zombie;
  }

  save() {
    this.bar.image_url = this.selectedZombie || this.bar.image_url;
    this.barService.updateBar(this.bar)
      .subscribe((bar) => {
        this.location.back();
      });
  }

  ngOnInit() {
    this.getBar();
  }

}
