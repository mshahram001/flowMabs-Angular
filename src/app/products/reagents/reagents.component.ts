import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-reagents',
  standalone: false,

  templateUrl: './reagents.component.html',
  styleUrl: './reagents.component.css'
})
export class ReagentsComponent {
  constructor(private _route: Router) {

  }

  cards = [
    {
      title: 'Secondary Reagents',
      description: 'Discover our secondary antibodies and reagents, designed to complement your primary of choice with ease.',
      linkText: 'Search all secondary antibodies and reagents',
      image: '/assets/images/single-cell.jpg'
    }
  ];

  backHome() {
    this._route.navigate(['/home']);
  }

  searchResults() {
    this._route.navigate(['products/product-type/reagents/search-result']);
  }
}
