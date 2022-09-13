import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      Welcome to Interpolaton
    </p>
  `,
  styles: [`
  p{
    text-align:center;
    font-size: 20px;
    color: green;
  }
  `  
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
