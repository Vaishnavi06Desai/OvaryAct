import { Component,Renderer2, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() type: 1 | 2 | 3 | 4 | 5= 1;
  @Input() id: number = 0;
  @Input() News_rating:string="";
  @Input() News_comments:string="";
  @Input() News_title:string="";
  @Input() News_Author:string="";
  @Input() News_link:string="";
  @Input() disease_title:string="";
  @Input() disease_image:string="";
  @Input() disease_description:string="";
  @Input() disease_link:string="";
  @Input() disease_symptom1:string="";
  @Input() disease_symptom2:string="";
  @Input() disease_symptom3:string="";
  
  globalListenFunc: Function = () => { };
  globalListenFunc2: Function = () => { };
  globalListenFunc3: Function = () => { };
  title: any;
  sneaker: any;
  purchase: any;
  description: any;
  sizes: any;
  card: any;
  constructor(private renderer: Renderer2) {
  }



  ngAfterViewInit(): void{

    if(this.type == 1){
      // console.log(this.id)
      this.card = <HTMLElement>document.getElementsByClassName("card")[this.id];
      // console.log(<HTMLElement>document.getElementById("1"))
    // this.container = document.querySelector(".container");
    //Items
    this.title = <HTMLElement>document.getElementsByClassName("title")[this.id];
    this.sneaker = <HTMLElement>document.getElementsByClassName("img1")[this.id];
    this.purchase = <HTMLElement>document.getElementsByClassName("purchase")[this.id];
    this.description = <HTMLElement>document.getElementsByClassName("description")[this.id];
    this.sizes = <HTMLElement>document.getElementsByClassName("sizes")[this.id];

    this.globalListenFunc = this.renderer.listen(this.card, 'mousemove', e => {
      let {x, y} = this.card.getBoundingClientRect();
      // console.log(e.pageX, e.pageY, x, y)
      // let xAxis = (window.innerWidth / 2 - (e.pageX )) / 25;
      // let yAxis = (window.innerHeight / 2 - (e.pageY)) / 25;
      let xAxis = 10 - (((e.pageX - x) * 20) / this.card.offsetWidth);
      let yAxis = 10 - (((e.pageY - (window.pageYOffset + y)) * 20) / this.card.offsetHeight);
      // console.log(e.pageY - (window.pageYOffset + y))
      // console.log(e.pageY, window.pageYOffset, y)
      this.card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      // this.card.style.transform = `rotateY(0deg) rotateX(${yAxis}deg)`;
    });

    // this.container?.addEventListener("mousemove", (e) => {
    //   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    //   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    //   this.card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // });
    //Animate In
    this.globalListenFunc2 = this.renderer.listen(this.card, 'mouseenter', e => {
      this.card.style.transition = "none";
      //Popout
      // console.log(this.title);
      this.title.style.transform = "perspective(700px) translateZ(75px)";
      this.sneaker.style.transform = "perspective(700px) translateZ(70px) rotateZ(-45deg) translateY(-50px)";
      this.description.style.transform = "perspective(700px) translateZ(75px)";
      this.sizes.style.transform = "perspective(700px) translateZ(50px)";
      this.purchase.style.transform = "perspective(700px) translateZ(35px)";
    });
    // this.container?.addEventListener("mouseenter", (e) => {
    //   this.card.style.transition = "none";
    //   //Popout
    //   this.title.style.transform = "translateZ(150px)";
    //   this.sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    //   this.description.style.transform = "translateZ(125px)";
    //   this.sizes.style.transform = "translateZ(100px)";
    //   this.purchase.style.transform = "translateZ(75px)";
    // });
    // //Animate Out
    this.globalListenFunc3 = this.renderer.listen(this.card, 'mouseleave', e => {
      this.card.style.transition = "all 0.5s ease";
      this.card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      //Popback
      this.title.style.transform = "translateZ(0px)";
      this.sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
      this.description.style.transform = "translateZ(0px)";
      this.sizes.style.transform = "translateZ(0px)";
      this.purchase.style.transform = "translateZ(0px)";
    });
    // this.container?.addEventListener("mouseleave", (e) => {
    //   this.card.style.transition = "all 0.5s ease";
    //   this.card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //   //Popback
    //   this.title.style.transform = "translateZ(0px)";
    //   this.sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    //   this.description.style.transform = "translateZ(0px)";
    //   this.sizes.style.transform = "translateZ(0px)";
    //   this.purchase.style.transform = "translateZ(0px)";
    // });

    }
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    // remove listener
    this.globalListenFunc();
    this.globalListenFunc2();
    this.globalListenFunc3();
  }

}
