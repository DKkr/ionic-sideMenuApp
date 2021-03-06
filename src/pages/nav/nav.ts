import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Account} from "../../interfaces/account";
import {EmailComposer} from "@ionic-native/email-composer";

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {
  private account = {} as Account;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavPage');
    this.account = this.navParams.get("account");
  }

  sendEmail(account: Account){
    let emailInfo = {
      to: account.email,
      subject: "Hello " + account.name,
      body: "",
      isHtml:true
    }

    this.emailComposer.open(emailInfo);
  }
}
