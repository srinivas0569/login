import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
email: string;
  goals = [];
  constructor() { }

  ngOnInit() {
  }
  change(e) {
  this.goals.push(this.email);
  console.log(this.email);
  this.email = '';
}
removeItem(i) {
  console.log(this.goals, i );
  this.goals.splice(i, 1 );
  }

}
