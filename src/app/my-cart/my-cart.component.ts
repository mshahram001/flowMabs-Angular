import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MyCartList } from '../models/flowMabsModel';

const MY_CART_PRODUCTS : MyCartList[] = [
  {product: 'Purified anti-β-Amyloid, x-42 Antibody', quantity: 1, price: '450'}
]

@Component({
  selector: 'app-my-cart',
  standalone: false,
  
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.css'
})
export class MyCartComponent {
  itemCount: number = 1;
  totalAmount: number = 450;

  displayedColumns: string[] = ['product', 'quantity', 'price'];
  dataSource = new MatTableDataSource(MY_CART_PRODUCTS);

  getTotalCost(): number {
    return this.dataSource.data.reduce((sum, item) => sum + +item.price, 0);
  }
  
}
