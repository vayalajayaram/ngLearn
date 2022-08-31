import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
respData:any;
  proceedLogin(loginData:any){
    if(loginData.valid){
      console.log(loginData);
      this.service.proceedLogin(loginData.value)
      .subscribe(item => {
        this.respData = item;
        console.log(this.respData);
      })
    }
  }

}
