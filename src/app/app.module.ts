import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';

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
import { NgosComponent } from './ngos/ngos.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ForumComponent } from './forum/forum.component';
import { MapsComponent } from './maps/maps.component';
import { ArtComponent } from './art/art.component';
import { HowtopageComponent } from './howtopage/howtopage.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponent,
    DiseaseComponent,
    CardsComponent,
    NgosComponent,
    ShopComponent,
    CartComponent,
    OrdersComponent,
    ForumComponent,
    MapsComponent,
    ArtComponent,
    HowtopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'OvaryAct'),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
