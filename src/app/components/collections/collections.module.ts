import { NgModule } from '@angular/core';
import { CollectionsComponent } from './collections.component';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [CollectionsComponent],
  imports: [NgFor],
  exports: [CollectionsComponent],
})
export class CollectionsModule {}
