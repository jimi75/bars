import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router}                          from '@angular/router';
import { Location }                                       from '@angular/common';
import { HttpClient, HttpHeaders }                        from '@angular/common/http';

import { Bar }            from '../bar';
import { BarService }     from '../bar.service';

declare var L :any;

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.css']
})

export class BarDetailComponent implements OnInit {

  @Input() bar: Bar;
  @Output() close = new EventEmitter();

  map: any;
  icon: any;
  address: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private barService: BarService,
    private http: HttpClient
  ) { }

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.barService.getBar(id)
      .subscribe(bar => { 
        this.bar = bar
      });
  }

  makeBarMap(bar: Bar) {
    
    // TODO: Possible Make a leaflet service
    this.map = L.map('map', {
      center: [bar.lat, bar.long],
      zoom: 16,
      attributionControl: false
    });

    this.icon = L.icon({
      iconUrl: 'assets/marker.png',
      iconSize: [30, 56],
      iconAnchor: [15, 56]
    });

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    L.marker([ bar.lat, bar.long ], { icon: this.icon }).addTo(this.map);
    
    // TOOD: Other service here
    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${bar.lat},${bar.long}&key=AIzaSyBPL8BMqAZWdh2Gxhnu29rjX6OrVBH4mt8`).subscribe(data => {
      this.address = data['results'][0]['formatted_address']; 
    });
  
  };

  onModalClosed() {
    this.close.emit();
    this.router.navigate(['bars']);
  };

  ngOnInit() {
    this.getBar();
  }

  ngAfterViewInit() {
    if(this.bar) { this.makeBarMap(this.bar); }
  }
}
