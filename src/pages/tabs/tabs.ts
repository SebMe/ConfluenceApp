import { Component } from '@angular/core';
import { TestPage } from '../test/test';
import { GroupsPage } from '../groups/groups';
import { MicropostsPage } from '../microposts/microposts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MicropostsPage;
  tab2Root = GroupsPage;
  tab3Root = TestPage;

  constructor() {

  }
}
