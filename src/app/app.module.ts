import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { AddScenesComponent } from './components/add-scenes/add-scenes.component';
import { ListingScenesComponent } from './components/listing-scenes/listing-scenes.component';
import { SinginComponent } from './components/singin/singin.component';


export const firebaseConfig = {
  apiKey: "AIzaSyB2HNN6gwc0lZ-Q4E25nwGjAoIpKLaUBsE",
  authDomain: "storiesmanagment-26a90.firebaseapp.com",
  databaseURL: "https://storiesmanagment-26a90.firebaseio.com",
  projectId: "storiesmanagment-26a90",
  storageBucket: "storiesmanagment-26a90.appspot.com",
  messagingSenderId: "1012189346602"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
 {path:'',component:HomeComponent},
 {path:'listings',component:ListingsComponent},
 {path:'listing/:parentId/:id', component:ListingComponent},
 {path:'add-listing',component:AddListingComponent},
 {path:'edit-listing/:parentId/:id', component:EditListingComponent},
 {path:'add-scenes/:id', component:AddScenesComponent},
 {path:'listing-scenes/:id', component:ListingScenesComponent},
 {path:'login', component:SinginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    AddScenesComponent,
    AddScenesComponent,
    ListingScenesComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(environment.firebase, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
