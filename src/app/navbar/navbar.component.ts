import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


@Output()
showSideBar: EventEmitter<any> = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

  showSideBarEmitter(){

    this.showSideBar.emit('');
  }
}
