import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ifwhite: boolean = false;
  nav: any;

  ngOnInit(): void {
    if (window.pageYOffset != 0) {
      this.ifwhite = true;
    }
    else{
      this.ifwhite = false;
    }
  }

  ngAfterViewInit(): void{

      


    // this.globalListenFunc = this.renderer.listen(this.card, 'mousemove', e => {
    //   let {x, y} = this.card.getBoundingClientRect();
    //   // console.log(e.pageX, e.pageY, x, y)
    //   // let xAxis = (window.innerWidth / 2 - (e.pageX )) / 25;
    //   // let yAxis = (window.innerHeight / 2 - (e.pageY)) / 25;
    //   let xAxis = 25 - (((e.pageX - x) * 50) / this.card.offsetWidth);
    //   let yAxis = 25 - (((e.pageY - (window.pageYOffset + y)) * 50) / this.card.offsetHeight);
    //   // console.log(e.pageY - (window.pageYOffset + y))
    //   // console.log(e.pageY, window.pageYOffset, y)
    //   this.card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    //   // this.card.style.transform = `rotateY(0deg) rotateX(${yAxis}deg)`;
    // });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    let nav = <HTMLElement>document.getElementsByClassName("main")[0];
    nav.style.backgroundColor = `rgba(255, 255, 255, ${window.pageYOffset / 100})`
    nav.style.color = `rgb(${255 - (window.pageYOffset)}, ${255 - (window.pageYOffset)}, ${255 - (window.pageYOffset)})`
    // if (window.pageYOffset != 0) {
    //   this.ifwhite = true;
     
    // }
    // else{
    //   this.ifwhite = false;
    // }
  }
}
