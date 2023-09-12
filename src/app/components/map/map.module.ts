import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapService } from 'src/app/service/map.service';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers:[MapService],
  exports: [MapComponent],
})
export class MapModule {}
