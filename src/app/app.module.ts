import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

import { MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import {HomeComponent} from "./components/home/home.component";
import {VideoCardComponent} from "./components/video-card/video-card.component";
import {VideoComponent} from "./components/video/video.component";
import {AccountComponent} from "./components/account/account.component";
import {CommentComponent} from "./components/comment/comment.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {HistoryComponent} from "./components/history/history.component";
import {WatchLaterComponent} from "./components/watch-later/watch-later.component";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCardComponent,
    VideoComponent,
    AccountComponent,
    CommentComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    HistoryComponent,
    WatchLaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
