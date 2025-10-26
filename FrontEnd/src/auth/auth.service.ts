import { Injectable } from '@angular/core';
import { IUser } from 'src/app/user/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // auth User
  authUser(user: IUser) {
    let usersArray = [];
    if (localStorage.getItem('Users')) {
      usersArray = JSON.parse(localStorage.getItem('Users')!);
    }
    return usersArray.find(
      (x: any) => x.name === user.name && x.password === user.password
    );
  }
}
