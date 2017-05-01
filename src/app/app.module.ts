import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { GroupsPage } from '../pages/groups/groups';
import { TabsPage } from '../pages/tabs/tabs';
import { MicropostsPage } from '../pages/microposts/microposts';
import { UserService } from '../services/userService';
import { RestService } from '../services/restService';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	TestPage,
	GroupsPage,
  TabsPage,
  MicropostsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	TestPage,
	GroupsPage,
  TabsPage,
  MicropostsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    RestService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
