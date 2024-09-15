import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoComponent } from './video/video.component';
import { AccountComponent } from './account/account.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HistoryComponent } from './history/history.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";

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
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
