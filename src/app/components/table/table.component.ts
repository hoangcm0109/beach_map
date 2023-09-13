import { Component, Input } from '@angular/core';
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

  ngOnInit(): void {
    console.log(this.dataSource);
  }

  getRecord(row: any) {
    console.log(row);
    this.options = {
      ...this.options,
      center: row.location,
    };
  }

  downloadDescription(value: any) {
    const blob = new Blob([value.description], {
      type: 'application/pdf',
    });

    const blobURL = window.URL.createObjectURL(blob);
    const tempLink = document.createElement('a');

    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', 'description.pdf');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(blobURL);
    }, 100);

    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
}
