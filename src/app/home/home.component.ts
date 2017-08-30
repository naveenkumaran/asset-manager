import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {    
    this.users = this.db.list('/devices');
    //this.logs
    
  }

}
