import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {VideoComponent} from "./video/video.component";
import {AccountComponent} from "./account/account.component";
import {CommentComponent} from "./comment/comment.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {HistoryComponent} from "./history/history.component";
import {WatchLaterComponent} from "./watch-later/watch-later.component";
import {VideoCardComponent} from "./video-card/video-card.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'history',component:HistoryComponent},
  {path:'watch-later',component:WatchLaterComponent},
  {path:'video-card',component:VideoCardComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
