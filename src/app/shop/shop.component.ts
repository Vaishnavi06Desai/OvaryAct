import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private db: AngularFirestore) { }
  products: any = [];

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts(){
    this.db.collection("Products").snapshotChanges().subscribe(res => {
      this.products = res;
    })
  }
}
