import { Component, OnInit } from '@angular/core';
import {user} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  userItem = new user('','','','','','','');
  register = {
    onSubmit : function(contactForm:any){
      console.log(contactForm.value);
    }
  };
  constructor() { }
  ngOnInit(): void {
  }
}
