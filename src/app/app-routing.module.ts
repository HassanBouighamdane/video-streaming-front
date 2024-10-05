import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {VideoComponent} from "./components/video/video.component";
import {AccountComponent} from "./components/account/account.component";
import {HistoryComponent} from "./components/history/history.component";
import {WatchLaterComponent} from "./components/watch-later/watch-later.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'history',component:HistoryComponent},
  {path:'watch-later',component:WatchLaterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
