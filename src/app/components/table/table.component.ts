import { Component } from '@angular/core';
import * as SomeJsonObjectName from '../../json/data.json';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = (SomeJsonObjectName as any).default;

  ngOnInit(): void {
    console.log(this.dataSource);
  }
}
