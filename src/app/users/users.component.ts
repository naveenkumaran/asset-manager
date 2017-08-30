import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {    
    this.users = this.db.list('/users');
  }

}


