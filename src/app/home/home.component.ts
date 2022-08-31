import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  homename = "Welcome to Home page";
  isdisabled = false;
  color = "green";
  font = "40px";
  salary = 1000;
  classname ="homecalss";
  ngOnInit(): void {
  }

  getFunction(name:string){
    alert(name)
    // this.isdisabled = true;
  }

}
