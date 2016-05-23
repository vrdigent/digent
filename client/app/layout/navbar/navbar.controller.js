'use strict';

class NavbarController {
  //start-non-standard
  //ASK: How to write correct?
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
    {
      'title': 'About LazerTag',
      'state': 'about'
    }, {
      'title': 'Contacts',
      'state': 'contacts'
    }];
//end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('dgentApp')
  .controller('NavbarController', NavbarController);
