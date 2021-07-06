import { UserUpdateService } from './../../services/user-update.service';
import { Component, OnInit } from '@angular/core';
import {user} from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  constructor(private userupdate:UserUpdateService) { 
  }
  model = new user('','','','','','','');
  onSubmit(contactForm:any){
    console.log(contactForm.value);
    this.userupdate.saveUser(contactForm.value);
    contactForm.reset();
  }
  ngOnInit(): void {
  }
}
