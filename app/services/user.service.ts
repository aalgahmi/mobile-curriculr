import {Injectable} from 'angular2/core';
import {User} from '../models/user';

var GUEST: User ={ email: 'guest@curriculr.org', name: "Guest User", loggedIn: false};

@Injectable()
export class UserService {
  login() {
    localStorage.setItem('cu', GUEST.email);
  }

  logout() {
    localStorage.removeItem('cu');
  }

  getCurrentUser(){
    return localStorage.getItem('cu');
  }
}
