import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  email: string;
  password: string;


  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

login() {
  if (this.email === undefined || this.password === undefined ) {
    alert('sorry enter any values');
  } else if (this.email === 'srinivas@gmail.com' && this.password === 'prasad' ) {
    this.user.setUserLoggedIn();
    this.router.navigate(['Todo'] );
    } else {
    alert('Invalid credentials.');
    }

  }
}
