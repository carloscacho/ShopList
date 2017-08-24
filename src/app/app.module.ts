import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FIREBASE_CREDENTIALS } from './firebase.credentials'

//app
import { MyApp } from './app.component';

//pages
import { ShopListPage } from '../pages/shop-list/shop-list';
import { AddShopPage } from "../pages/add-shop/add-shop";
import { EditShopItemPage } from "../pages/edit-shop-item/edit-shop-item";


@NgModule({
  declarations: [
    MyApp,
    ShopListPage,
    AddShopPage,
    EditShopItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //initalize angulafire with credentials
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    //firebase database
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShopListPage,
    AddShopPage,
    EditShopItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
