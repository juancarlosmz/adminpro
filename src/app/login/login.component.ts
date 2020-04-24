import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function  init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
    setTimeout(function(){
      init_plugins();
    },10);
  }

  ingresar(){
    this.router.navigate(['/dashboard']);
  }

}
