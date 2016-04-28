import {Injectable} from 'angular2/core';
import {User} from '../models/user';

var GUEST: User ={ email: 'guest@curriculr.org', name: "Guest User", loggedIn: false};

@Injectable()
export class UserService {
  login(user: User) {
    return new Promise<User>(resolve =>
      setTimeout(()=>resolve(GUEST), 2000) // 2 seconds
    );
  }
}
