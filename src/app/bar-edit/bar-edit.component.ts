import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router}  from '@angular/router';
import { Location }               from '@angular/common';

import { Bar }            from '../bar';
import { BarService }     from '../bar.service';
import { ZOMBIES }        from '../zombies';


@Component({
  selector: 'app-bar-edit',
  templateUrl: './bar-edit.component.html',
  styleUrls: ['./bar-edit.component.css']
})

export class BarEditComponent implements OnInit {

  zombies =  ZOMBIES;

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
