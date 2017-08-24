import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { ShopListPage } from '../pages/shop-list/shop-list';
import { AddShopPage } from "../pages/add-shop/add-shop";
import { EditShopItemPage } from "../pages/edit-shop-item/edit-shop-item";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ShopListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

