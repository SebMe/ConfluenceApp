import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, AlertController} from 'ionic-angular';
import { UserService } from '../../services/userService';
import { RestService } from '../../services/restService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private user: UserService, private restService:RestService) {
  }

  presentAlert(){
    let alert = this.alertCtrl.create({
      title: 'Login Failed',
      subTitle: 'Check console for details.',
      buttons: ['OK']
    });
    alert.present();
  }

  login(){
    this.restService.login().subscribe(
      data =>{
        this.navCtrl.setRoot(TabsPage);
      },
      err =>{
        this.presentAlert();
        console.log("Fail: "+err);
      }
    );
  }
}
