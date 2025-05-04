import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { ReagentsProductList } from '../../models/flowMabsModel';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

const REAGENSTS_PRODUCT_DATA : ReagentsProductList[] = [
  {product: 'Purifed anti-human IgG2 Antibody', clone: 'HP6002', application: 'ELISA Capture', reg: 'RUO', cat: 411102, size: '500', price: '241 CHF'},
  {product: 'Purifed anti-human IgG4 Antibody', clone: 'HP6023', application: 'ELISA Capture', reg: 'RUO', cat: 411202, size: '500', price: '469 CHF'},
  { product: 'Purified anti-human IgG3 Antibody', clone: 'HP6047', application: 'ELISA Capture', reg: 'RUO', cat: 411302, size: '500', price: '218 CHF' },
  { product: 'Purified anti-human IgE Antibody', clone: 'HP6061', application: 'ELISA Capture', reg: 'RUO', cat: 411402, size: '500', price: '469 CHF' },
  { product: 'Purified anti-human IgA Antibody', clone: 'HP6123', application: 'ELISA Capture', reg: 'RUO', cat: 411502, size: '500', price: '329 CHF' },
  { product: 'Direct-Blot™ HRP anti-human IgG1 Fc Antibody', clone: '1308410', application: 'WB', reg: 'RUO', cat: 410604, size: '25 µL', price: '101 CHF' },
  { product: 'Purified anti-human IgG1 Fc Antibody', clone: '1308410', application: 'WB', reg: 'RUO', cat: 410603, size: '100 µg', price: '112 CHF' },
  { product: 'FITC anti-human IgG Fc Antibody', clone: '1310605', application: 'FC', reg: 'RUO', cat: 410601, size: '100 tests', price: '183 CHF' },
  { product: 'APC anti-human IgG Fc Antibody', clone: '1310605', application: 'FC', reg: 'RUO', cat: 410719, size: '25 tests', price: '183 CHF' },
  { product: 'Alexa Fluor® 488 anti-human IgG Fc Antibody', clone: '1310605', application: 'FC', reg: 'RUO', cat: 410720, size: '100 tests', price: '183 CHF' },
  { product: 'Alexa Fluor® 647 anti-human IgG Fc Antibody', clone: '1310605', application: 'FC', reg: 'RUO', cat: 410711, size: '25 tests', price: '183 CHF' },
  { product: 'APC/Fire™ 750 anti-human IgG Fc Antibody', clone: '1310605', application: 'FC', reg: 'RUO', cat: 410712, size: '100 tests', price: '183 CHF' }
]
@Component({
  selector: 'app-search-result',
  standalone: false,
  
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  displayedColumns: string[] = ['product', 'clone', 'application', 'reg', 'cat', 'size', 'price', 'quantity'];
  dataSource = new MatTableDataSource(REAGENSTS_PRODUCT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
