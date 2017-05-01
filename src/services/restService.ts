import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserService } from './userService';

@Injectable()
export class RestService{

    private headers;

    constructor(private user:UserService, private http:Http){
      this.headers = new Headers({'Accept': 'application/json'});
      var authHeader = 'Basic ' + btoa(this.user.username + ':' + this.user.password);
      this.headers.append('Authorization', authHeader);
    }

    login(){
      return this.http.get(this.user.serverURL + '/rest/api/user?os_authType=basic&username='+this.user.username, {headers: this.headers}).map(res=>res.json());
    }

    getMicroposts(){
      return this.http.get(this.user.serverURL + '/rest/microblog/1.0/microposts?os_authType=basic', {headers: this.headers}).map(res=>res.json());
    }
}