import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private db: AngularFirestore) { }
  items: any;
  total: number = 0;
  ngOnInit(): void {
    this.as.getUserState().subscribe(user => {
      if(user == null) this.router.navigate(['/signin']);
      this.getcart(user);
    })
  }

  getcart(usercred){
    this.db.collection("Cart").doc(usercred.uid).collection("items").snapshotChanges().subscribe(res => {
      this.items = res;
      for(let x of this.items){
        this.db.collection("Products").doc(x.payload.doc.data().productid).snapshotChanges().subscribe((res: any) => {
          x["quantity"] = x.payload.doc.data().quantity;
          x["namee"] = res.payload.data().name;
          x["soldby"] = res.payload.data().soldby;
          x["price"] = res.payload.data().price;
          this.total += x["price"]
        })
      }
      console.log(this.items)
    })
  }

}
