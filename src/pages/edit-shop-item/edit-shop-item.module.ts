import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditShopItemPage } from './edit-shop-item';

@NgModule({
  declarations: [
    EditShopItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditShopItemPage),
  ],
})
export class EditShopItemPageModule {}
