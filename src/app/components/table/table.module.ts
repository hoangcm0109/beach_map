import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [TableComponent],
  imports: [
    MatTableModule,
    MatIconModule
  ],
  exports: [TableComponent],
})
export class TableModule {}
