import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as SomeJsonObjectName from '../../json/data.json';
import * as dataCollections from '../../json/data-collections.json';
import { OptionLocation } from './types/home.type';
@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('mapView') mapView: ElementRef | any;

  collections: any;

  responsiveOptions: any[] | undefined;

  foods = [
    { value: 'EAST', viewValue: 'EAST' },
    { value: 'WEST', viewValue: 'WEST' },
    { value: 'SOUTH', viewValue: 'SOUTH' },
    { value: 'NORTH', viewValue: 'NORTH' },
  ];

  dataSource: any;
  dataLocal: any;

  options: OptionLocation = {
    center: { lat: 21.0282, lng: 105.8538 },
    zoom: 20,
  };

  valueSelect: string | undefined;

  constructor() {}

  ngOnInit() {
    this.collections = (dataCollections as any).default;

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.dataSource = (SomeJsonObjectName as any).default;
    this.dataLocal = (SomeJsonObjectName as any).default;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'EAST ';
      case 'LOWSTOCK':
        return 'WEST';
      case 'OUTOFSTOCK':
        return 'SOUTH';
      default:
        return 'NORTH';
    }
    return;
  }

  selectFilterArea(event: any) {
    const temp = [...this.dataLocal].filter(
      (item: any) => item.area === event.value
    );
    this.dataSource = temp;

    this.valueSelect = event.value;
  }

  handleEmitOptions(row: any) {
    this.options = {
      ...this.options,
      center: row.location,
    };
    this.mapView.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
}
