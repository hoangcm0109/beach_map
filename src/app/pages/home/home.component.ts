import { Component, OnInit } from '@angular/core';
import * as SomeJsonObjectName from '../../json/data.json';
import { OptionLocation } from './types/home.type';
@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any;

  responsiveOptions: any[] | undefined;

  foods = [
    { value: 'EAST', viewValue: 'EAST' },
    { value: 'WEST', viewValue: 'WEST' },
    { value: 'SOUTH', viewValue: 'SOUTH' },
    { value: 'NORTH', viewValue: 'NORTH' },
  ];

  dataSource: any;

  options: OptionLocation = {
    center: { lat: 21.0282, lng: 105.8538 },
    zoom: 30,
  };

  valueSelect: string | undefined;

  constructor() {}

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //   console.log(products);

    //   this.products = products;
    // });

    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Nihiwatu Beach, Indonesia',
        description: 'Product Description',
        image:
          'https://www.tuyenquangtv.vn/file/fb9e3a036ab59c2c016ac3618a0d3aec/old_image/uploaded/130/2017/5/15/822_bai-bien-Nihiwatu.jpg#editor',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Maya Bay, Thailand',
        description: 'Product Description',
        image:
          'https://www.tuyenquangtv.vn/file/fb9e3a036ab59c2c016ac3618a0d3aec/old_image/uploaded/130/2017/5/15/751_bai-bien-Maya-Bay.jpg#editor',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Juara Beach, Malaysia',
        description: 'Product Description',
        image:
          'https://www.tuyenquangtv.vn/file/fb9e3a036ab59c2c016ac3618a0d3aec/old_image/uploaded/130/2017/5/15/735_bai-bien-Juara.jpg#editor',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Rocks Beach, Cape Town',
        description: 'Product Description',
        image:
          'https://www.tuyenquangtv.vn/file/fb9e3a036ab59c2c016ac3618a0d3aec/old_image/uploaded/130/2017/5/15/802_bai-bien-Rocks-Beach.jpg#editor',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bondi - Australia ',
        description: 'Product Description',
        image:
          'https://www.vietnambooking.com/wp-content/uploads/2023/02/10-bai-bien-noi-tieng-nhat-the-gioi-2022-5.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Pattaya ',
        description: 'Product Description',
        image:
          'https://www.vietnambooking.com/wp-content/uploads/2023/02/10-bai-bien-noi-tieng-nhat-the-gioi-2022-6.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
      },
      {
        id: '1006',
        code: 'bib36pfvm',
        name: ' Waikiki',
        description: 'Product Description',
        image:
          'https://www.vietnambooking.com/wp-content/uploads/2023/02/10-bai-bien-noi-tieng-nhat-the-gioi-2022-9.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
      },
      {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'JBR - Dubai',
        description: 'Product Description',
        image:
          'https://www.vietnambooking.com/wp-content/uploads/2023/02/10-bai-bien-noi-tieng-nhat-the-gioi-2022-10.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ];

    console.log(this.products);

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.dataSource = (SomeJsonObjectName as any).default;
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.options);
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'EAST ';
      case 'LOWSTOCK':
        return 'WEST';
      case 'OUTOFSTOCK':
        return 'SOUTH';
      default:
        return 'NORTH';
    }
    return;
  }

  selectFilterArea(event: any) {
    const temp = [...this.dataSource].filter(
      (item: any) => item.area === event.value
    );
    this.dataSource = temp;

    this.valueSelect = event.value;
  }
}
