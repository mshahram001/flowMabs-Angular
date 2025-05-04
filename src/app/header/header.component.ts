import { Component, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';

export interface MenuItem {
  label: string;
  submenu?: MenuItem[];
  link?: string;
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  myControl = new FormControl('');
  options: string[] = ['Product Support', 'FLow Cytometry Tools', 'Spectra Analyzers', 'Phenotyping'];
  filteredOptions: Observable<string[]>;
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  countryName: string = 'United States';
  content: string = 'Achieve robust multiplexing in small sample pools and reduce experimental variability with TotalSeq™ hashtag reagents.';
  isPanelVisible = false;
  panelData: any = null;
  @ViewChildren(MatMenu) menus!: QueryList<MatMenu>;
  menuRefs: { [key: string]: MatMenu } = {};
  userName: string = 'Mohd Shahram';

  constructor(public dialog: MatDialog, private _route: Router) {

  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  countries = [
    { name: 'India', currency: 'INR' },
    { name: 'USA',currency: 'USD' },
    { name: 'UK',currency: 'GBP' },
  ];

  openPanel(): void {
    // Display the panel with country details
    this.isPanelVisible = true;
    this.panelData = this.countries; 
    console.log(this.panelData) // Show all countries or filter based on selection
  }

  closePanelWithDelay(): void {
    setTimeout(() => {
      this.isPanelVisible = false;
      this.panelData = null;
  });
  }

  selectCountry(country: any): void {
    this.countryName = country.name;  // Set the selected country name
    this.isPanelVisible = false;  // Close the panel after selection
  }
  
  menuData: MenuItem[] = [
    {
      label: 'Products',
      submenu: [
        {
          label: 'Product Type',
          submenu: [
            { label: 'Reagents', link: '/products/product-type/reagents' },
          ]
        },
      ]
    },
    // {
    //   label: 'Support',
    //   submenu: [
    //     { label: 'Product Support' },
    //   ]
    // },
    {
      label: 'About Us',
      submenu: [
        { label: 'Our Company', link: '/about-us/our-company' },
      ]
    },
    { label: 'Contact Us', link: '/contact-us' }
  ];
  

  ngAfterViewInit() {
    this.menus.forEach(menu => {
      this.menuRefs[menu['_elementRef'].nativeElement.getAttribute('id')] = menu;
    });
  }

  tableData = [
    { productType: 'Antibodies and Reagents', application: 'Flow Cytometry', researchArea: 'Immunology' },
    { productType: 'Apoptosis and Cell Health Reagents', application: 'Fluorophore Families', researchArea: 'Stem Cells' },
    { productType: 'Buffers and Chemical Probes', application: 'TotalSeq', researchArea: 'Oncology' },
    { productType: 'Isotype Controls', application: 'ELISAs', researchArea: 'Neuroscience' }
  ];

  openCart() {
    this._route.navigate(['/my-cart']);
  }

}
