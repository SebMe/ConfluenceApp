import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	templateUrl: 'groups.html'
})

export class GroupsPage {
	public restResult:any;

	constructor(public navCtrl: NavController, public http: Http){
	}
}