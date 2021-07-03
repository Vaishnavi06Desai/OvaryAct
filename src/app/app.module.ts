import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './news/news.component';
import { DiseaseComponent } from './disease/disease.component';
import { CardsComponent } from './cards/cards.component';
<<<<<<< HEAD
import { NgosComponent } from './ngos/ngos.component';
=======
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ForumComponent } from './forum/forum.component';
import { MapsComponent } from './maps/maps.component';
import { ArtComponent } from './art/art.component';
>>>>>>> 73e42ec44c7f53ad90e289f6ec126d639f5402be

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponent,
    DiseaseComponent,
    CardsComponent,
<<<<<<< HEAD
    NgosComponent
=======
    ShopComponent,
    CartComponent,
    OrdersComponent,
    ForumComponent,
    MapsComponent,
    ArtComponent
>>>>>>> 73e42ec44c7f53ad90e289f6ec126d639f5402be
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'OvaryAct'),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
