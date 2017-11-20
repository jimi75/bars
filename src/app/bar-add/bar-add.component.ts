import { Component, OnInit }      from '@angular/core';
import { FormGroup }              from '@angular/forms';
import { ActivatedRoute, Router}  from '@angular/router';
import { Location }               from '@angular/common';

import { Bar }        from '../bar';
import { BarService } from '../bar.service';
import { ZOMBIES }    from '../zombies';


@Component({
  selector: 'app-bar-add',
  templateUrl: './bar-add.component.html',
  styleUrls: ['./bar-add.component.css']
})

export class BarAddComponent implements OnInit {

  zombies = ZOMBIES;
  selectedZombie: string;
  form: FormGroup; 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private barService: BarService
  ) { 

  }

  bar = new Bar();

  onSubmit() {

    if(!this.selectedZombie) {
      alert('You need to choose a zombie!');
      return false;
    }

    this.barService.addBar(this.bar)
      .subscribe(bar => { 
         this.router.navigate(['bars']);
      });
  };

  onZombieSelected(zombie) {
    this.bar.image_url = this.selectedZombie = zombie;
  };

  ngOnInit() {
  }

}
