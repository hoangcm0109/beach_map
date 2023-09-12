import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { MapComponent } from 'src/app/components/map/map.component';
import { MapModule } from 'src/app/components/map/map.module';
import { TableComponent } from 'src/app/components/table/table.component';
import { TableModule } from 'src/app/components/table/table.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    MapModule,
    TableModule
  ],
})
export class HomeModule {}
