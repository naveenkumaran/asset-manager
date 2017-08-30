import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {    
    this.devices = this.db.list('/devices');
  }

}
