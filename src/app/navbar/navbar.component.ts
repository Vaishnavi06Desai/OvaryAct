import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ifwhite: boolean = false;

  ngOnInit(): void {
    if (window.pageYOffset != 0) {
      this.ifwhite = true;
    }
    else{
      this.ifwhite = false;
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.pageYOffset != 0) {
      this.ifwhite = true;
    }
    else{
      this.ifwhite = false;
    }
  }
}
