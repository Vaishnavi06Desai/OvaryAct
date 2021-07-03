import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { DiseaseComponent } from './disease/disease.component';
import { CardsComponent } from './cards/cards.component';
import { NewsComponent } from './news/news.component';
import { HowtopageComponent } from './howtopage/howtopage.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ShopComponent } from './shop/shop.component';
import { ForumComponent } from './forum/forum.component';

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
    path: "howto",
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
