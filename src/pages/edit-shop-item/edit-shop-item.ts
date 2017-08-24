import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//componets
import { AngularFireDatabase,  FirebaseObjectObservable } from "angularfire2/database";
import { Subscription } from 'rxjs/Subscription';

//model
import { ShopItem } from "../../models/shop-item";


@Component({
  selector: 'page-edit-shop-item',
  templateUrl: 'edit-shop-item.html',
})
export class EditShopItemPage {

  public shopItemRef$: FirebaseObjectObservable<ShopItem>;
  shopItem = {} as ShopItem
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase) {

      //Set the scope of our firebase object equal to our selected item
      const shopItemId = this.navParams.get('shopItemId');
      this.shopItemRef$ = this.database.object(`shop-list/${shopItemId}`);

      //subscribe to the object and assign the result to this. shopp item
      this.shopItemRef$.subscribe(shopItem => this.shopItem = shopItem);
  }

  //update firevase node with the new item
  public editShopItem(shopItem: ShopItem){
    this.shopItemRef$.update(shopItem);

    //back the list page
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShopItemPage');
  }

}
