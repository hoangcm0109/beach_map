import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { OptionLocation } from 'src/app/pages/home/types/home.type';

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
  displayedColumns: string[] = [
    'id',
    'name',
    'imageLink',
    'description',
    'area',
    'download',
  ];

  @Input() dataSource: any;
  @Input() options: OptionLocation | any;

  @Output() handleEmitOptions = new EventEmitter<any>();

  constructor() {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  getRecord(row: any) {
    // console.log(row);
    this.handleEmitOptions.emit(row);
  }

  downloadDescription(value: any) {
    const documentDefinition = {
      content: [
        { text: `${value.name} - Beach Map`, style: 'header' },
        value.description,
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
        },
      },
    };

    const pdfDoc = pdfMake.createPdf(documentDefinition);

    pdfDoc.download('description.pdf');
  }
}
