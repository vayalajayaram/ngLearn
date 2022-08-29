import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public search : string = "";
  constructor() { }

  ngOnInit(): void {
    this.search = "jayaram";
  }

}
