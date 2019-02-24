import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  info: any;

  constructor() { }
  @Output() loggedChange = new EventEmitter<any>();
  @Input() set logged(val: any) {
    this.info = val;
    this.loggedChange.emit(val);
  }
  ngOnInit() {
  }
  changeValue() {
    this.info.isLogged = ! this.info.isLogged;
    this.loggedChange.emit(this.info);
  }

}

