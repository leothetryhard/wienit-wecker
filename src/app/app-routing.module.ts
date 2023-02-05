import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WeckerDetailComponent} from "./wecker-detail/wecker-detail.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      canonical: '/'
    }
  },
  {
    path: 'wecker/:id', component: WeckerDetailComponent,
    data: {
      canonical: '/wecker'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
