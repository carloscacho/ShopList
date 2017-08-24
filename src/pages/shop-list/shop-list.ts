import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShopPage } from "../add-shop/add-shop";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { ShopItem } from "../../models/shop-item";
import { EditShopItemPage} from '../edit-shop-item/edit-shop-item'

@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html',
})
export class ShopListPage {

  shopListRef$: FirebaseListObservable<ShopItem[]>

  showThis: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController) {
    //shop list ref at firebase
    this.shopListRef$ = this.database.list('shop-list');

    this.shopListRef$.subscribe(x => console.log(x));
  }

  public navToAddShopPage() {
    this.navCtrl.push(AddShopPage);
  }

  public showOrNot() {
    if (this.showThis) {
      this.showThis = false;
    } else {
      this.showThis = true;
    }
  }

  public getShowThis() {
    return this.showThis
  }

  public selectShopItem(shopItem: ShopItem) {

    this.actionSheetCtrl.create({
      title: `${shopItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.navCtrl.push(EditShopItemPage, {
              shopItemId:shopItem.$key
            });

            
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            //delete
            this.shopListRef$.remove(shopItem.$key)
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("The use has selected the cancel button");
          }
        }
      ]
    }).present();
  }

}
