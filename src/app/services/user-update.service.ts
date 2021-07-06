import { Injectable } from '@angular/core';
import { user } from '../access/user';
@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
  saveUser(user:user){
    localStorage.setItem('user',JSON.stringify(user));
  }
  constructor() { }
}
