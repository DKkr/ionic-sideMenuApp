import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Profile} from "../../interfaces/profile";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  profile: Profile = {} as Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
   // this.profile.actionSwitch = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.viewCtrl.dismiss(this.profile);
  }
}
