import { Component } from '@angular/core';
import { MainService } from '../../_services/main.service';
import {} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: any[] = [];

  constructor(private productService: MainService) {}

  ngOnInit(): void {
    this.productService.loadProductsList().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
    
  }
}
