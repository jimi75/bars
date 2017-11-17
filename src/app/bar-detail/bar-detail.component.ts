import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router}                          from '@angular/router';
import { Location }                                       from '@angular/common';

import { Bar }          from '../bar';
import { BarService }   from '../bar.service';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.css']
})

export class BarDetailComponent implements OnInit {

  @Input() bar: Bar;
  @Output() close = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private barService: BarService,
    private location: Location,
    private router: Router
  ) { }
  
  onModalClosed() {
    this.close.emit();
    this.router.navigate(['bars']);
  }

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.barService.getBar(id)
      .subscribe(bar => this.bar = bar);
  }

  ngOnInit() {
    this.getBar();
  }

}
