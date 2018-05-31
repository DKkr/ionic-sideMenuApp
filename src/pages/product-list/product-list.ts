import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {Product} from "../../model/product";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  productsObservable: Observable<Product[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');

    this.productsObservable = this.restProvider.getProducts();
    this.productsObservable.subscribe()
  }

  navToDetail(product){
    this.navCtrl.push('ProductDetailPage', {product:product});
  }

}
