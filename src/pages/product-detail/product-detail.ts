import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Product} from "../../model/product";
import {RestProvider} from "../../providers/rest/rest";


/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  product?: Product = {} as Product;
  //product: Product;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private restProvider: RestProvider,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
    //console.log(this.navParams.get("product"));
    this.product = new Product(this.navParams.get("product"));
  }

  saveProduct(product:Product){
    if(product.id){//수정
      this.restProvider.updateProduct(product)
        .subscribe(response => {
          this.product = response;
          this.showMsg("상품 : "+response.id+" - "+response.name+ " 수정됨");
          this.navCtrl.pop();
        });
    }else {//등록
      this.restProvider.createProduct(product)
        .subscribe(response => {
          this.product = response;
          this.showMsg("상품 : "+response.id+" - "+response.name+ " 등록됨");
          this.navCtrl.pop();
        });
    }
  }

  deleteProduct(productID: number){
    this.restProvider.deleteProduct(productID)
      .subscribe(() => {
        this.showMsg("상품 : "+productID+ " 삭제됨");
        this.navCtrl.pop();
      });
  }

  showMsg(message:string){
    this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      duration: 3000,
      position: "top"
    }).present();
  }
}
