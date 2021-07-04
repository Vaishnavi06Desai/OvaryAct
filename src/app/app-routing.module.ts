import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { DiseaseComponent } from './disease/disease.component';
import { CardsComponent } from './cards/cards.component';
import { NewsComponent } from './news/news.component';
import { MapsComponent } from './maps/maps.component';
import { ArtComponent } from './art/art.component';
import { HowtopageComponent } from './howtopage/howtopage.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ShopComponent } from './shop/shop.component';
import { ForumComponent } from './forum/forum.component';
import { CartComponent } from './cart/cart.component';
import { NgosComponent } from './ngos/ngos.component';

import { BlogsComponent } from './blogs/blogs.component';
import { PaymentComponent } from './payment/payment.component';
import { NewsandblogComponent } from './newsandblog/newsandblog.component';
import { CommunityComponent } from './community/community.component';
;
const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "disease",
    component: DiseaseComponent
  },
  {
    path: "cards",
    component: CardsComponent
  },
  {
    path:"map",
    component: MapsComponent
  },
  {
    path:"art",
    component: ArtComponent},
   { path: "howto",
    component: HowtopageComponent
  },
  {
    path: "Appointments",
    component: AppointmentsComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "forum",
    component: ForumComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "ngos",
    component: NgosComponent
  },
  {
    path: "blogs",
    component: BlogsComponent
  },
  {
    path: "pay",
    component: PaymentComponent
  },
  {
    path: "newsandblog",
    component: NewsandblogComponent
  },
  {
    path: "community",
    component: CommunityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
