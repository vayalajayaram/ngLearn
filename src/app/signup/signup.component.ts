import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuiler : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuiler.group({
      FirstName:[''],
      MobileNumber:[''],
      EMail:[''],
      Password:['']
    })
  }
  signUp(){
    console.log(this.signupForm.value);
    this.http.post<any>("http://localhost:3000/register",this.signupForm.value)
    .subscribe({
      next:(res)=>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },error:(err)=>{
      alert("Something went wrong");
    }
    })
  }

}
