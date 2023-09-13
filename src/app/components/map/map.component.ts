import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { OptionLocation } from 'src/app/pages/home/types/home.type';
import { MapService } from 'src/app/service/map.service';
@Component({
  selector: 'map-view',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  constructor(
    @Optional() public mapService: MapService,
    private cd: ChangeDetectorRef
  ) {
    // If you're using the `<map-heatmap-layer>` directive, you also have to include the `visualization` library
    // when loading the Google Maps API. To do so, you can add `&libraries=visualization` to the script URL:
    // https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization
  }

  ngAfterViewInit() {
    this.mapService.getMap();
  }

  @Input() options: OptionLocation = {
    center: { lat: 21.0282, lng: 105.8538 },
    zoom: 30,
  };

  ngOnInit(): void {
    if (navigator.geolocation) {
      const _this = this;
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        _this.options = {
          ..._this.options,
          center: {
            lat: latitude,
            lng: longitude,
          },
        };
        _this.cd.detectChanges();
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  setChangeOptions() {
    this.options = {
      center: { lat: 21.0282, lng: 105.8538 },
      zoom: 30,
    };
  }
}
