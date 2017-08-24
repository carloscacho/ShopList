import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopItem } from "../../models/shop-item";

//firebase database
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-add-shop',
  templateUrl: 'add-shop.html',
})
export class AddShopPage {

  shopItem = {} as ShopItem;

  shopItemRef$: FirebaseListObservable<ShopItem[]>;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, private database: AngularFireDatabase) 
     {
       //constructor
       this.shopItemRef$ = this.database.list('shop-list');

       
     }


  addShopItem(shopItem: ShopItem){

    this.shopItemRef$.push({
      itemName: this.shopItem.itemName,
      itemNumber: Number(this.shopItem.itemNumber)
    });

    //reset
    this.shopItem = {} as ShopItem

    //nav back
    //this.navCtrl.pop();
  }

  

}
