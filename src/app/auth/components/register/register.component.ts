import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  constructor(private _router:Router) { }

  ngOnInit(): void {

  }

  register(){

  }

  canSubmit() : boolean{
    return this.fullName && this.email && this.password && this.confirmPassword ? true : false;
  }



}
