import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent {
  @Output() handleEmitOptions = new EventEmitter<any>();

  @Input() collections: any

  viewMapBeach(beach: any) {
    this.handleEmitOptions.emit(beach)
  }
}
