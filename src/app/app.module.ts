import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { MdButtonModule, MdCheckboxModule, MdRadioModule, MdToolbarModule,
  MdIconModule, MdSidenavModule, MdCardModule, MdInputModule, MdSlideToggleModule, MdTooltipModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

export const firebaseConfig = {
  apiKey: "AIzaSyAEogTf3ipOTfuNP2khb6YIf7Z1fiG9rrU",
  authDomain: "assetmanager-5a38f.firebaseapp.com",
  databaseURL: "https://assetmanager-5a38f.firebaseio.com",
  projectId: "assetmanager-5a38f",
  storageBucket: "assetmanager-5a38f.appspot.com",
  messagingSenderId: "165269831484"
};


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DevicesComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdSlideToggleModule,
    MdTooltipModule

  ],
  providers: [AuthService,AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
