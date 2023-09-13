import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { MapModule } from 'src/app/components/map/map.module';
import { TableModule } from 'src/app/components/table/table.module';
import { FormContactModule } from 'src/app/components/form-contact/form-contact.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    NgFor,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    MapModule,
    TableModule,
    FormContactModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
})
export class HomeModule {}
