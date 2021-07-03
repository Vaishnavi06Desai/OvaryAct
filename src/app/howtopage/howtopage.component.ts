import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-howtopage',
  templateUrl: './howtopage.component.html',
  styleUrls: ['./howtopage.component.css']
})

export class HowtopageComponent implements OnInit {
  // public safeUrl: any;
  safeUrl;
  constructor(private _sanitizer: DomSanitizer) {
    // let url ='https://www.youtube.com/embed/2UqTUZ8pquo';
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/2UqTUZ8pquo");
   }

  ngOnInit(): void {
    // this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=2UqTUZ8pquo');
    // this.safeUrl = "https://www.youtube.com/embed/2UqTUZ8pquo";
  }

}
