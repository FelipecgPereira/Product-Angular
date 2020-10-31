import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  teste1 = "Felipe"
  constructor() { }

  ngOnInit(): void {
  }

  teste(): void {
    console.log("Ola");
  }


}
