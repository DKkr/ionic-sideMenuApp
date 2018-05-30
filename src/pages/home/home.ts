import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Profile} from "../../interfaces/profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profile: Profile = null;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  presentModalPage(){
    let modal = this.modalCtrl.create('ModalPage');
    modal.onDidDismiss((profile) => {
      if(profile != undefined && Object.keys(profile).length != 0){
        this.profile = profile;
      }

      console.log(this.profile);
    });
    modal.present();
  }
}
