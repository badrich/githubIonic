import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GithubUsers } from '../../providers/github-users/github-users'
/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [GithubUsers]
})
export class UsersPage {

  constructor(public nav: NavController, githubUsers: GithubUsers) {
    githubUsers.load()
    .then( function (users) {
      console.log(users);
    });
  }

}
