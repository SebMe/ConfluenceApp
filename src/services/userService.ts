import { Injectable } from '@angular/core'

@Injectable()
export class UserService{
    public username:String;
    public password:String;
    public serverURL:String;

    constructor(){
      /*
      this.serverURL = 'http://localhost:8090';
      this.username = 'admin';
      this.password = 'confluencetest';*/

      this.serverURL = 'http://demonstration.linchpin-intranet.com';
      this.username = 'customer';
      this.password = 'customer';
    }
}