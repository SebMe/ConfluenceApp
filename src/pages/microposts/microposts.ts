import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestService } from '../../services/restService';
import { UserService } from '../../services/userService';

@Component({
  selector: 'page-microposts',
  templateUrl: 'microposts.html'
})
export class MicropostsPage {

  private microposts;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService:RestService, public userService:UserService) {
    restService.getMicroposts().subscribe(
      data=>{
        this.microposts = data.microposts.map(post=>{
          post.profilePicturePath = userService.serverURL + post.profilePicturePath;
          return post;
        });
        console.log(this.microposts);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
