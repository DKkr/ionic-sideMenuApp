import {Component} from '@angular/core';
import {ModalController, NavController, AlertController} from 'ionic-angular';
import {Profile} from "../../interfaces/profile";
import {Account} from "../../interfaces/account"
import {SMS} from "@ionic-native/sms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profile: Profile = null;
  accountData = {} as Account;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              private sms: SMS) {

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

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "이름과 E-Mail을 입력하세요",
      inputs: [
        { name: 'name', placeholder: 'Name 입력' },
        { name: 'email', placeholder: 'Email 입력' },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '저장',
          handler: data => {
            this.accountData = data;
            this.navCtrl.push('NavPage', {account: this.accountData});
          }
        }
      ],
    });
    prompt.present();
  }

  sendSMS(){
    let prompt = this.alertCtrl.create({
      title: 'SMS 전송',
      message: "전화번호와 내용을 입력하세요",
      inputs: [
        { name: 'tel', placeholder: '전화번호' },
        { name: 'content', placeholder: '내용' },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '전송',
          handler: data => {
            this.sms.send(data.tel, data.conent);
          }
        }
      ],
    });
    prompt.present();
  }
}
