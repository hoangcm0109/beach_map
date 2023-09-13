import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormContactComponent } from './form-contact.component';

@NgModule({
  declarations: [FormContactComponent],
  imports: [MatTableModule, MatIconModule],
  exports: [FormContactComponent],
})
export class FormContactModule {}
