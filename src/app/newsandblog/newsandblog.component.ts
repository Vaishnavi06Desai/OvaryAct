import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsandblog',
  templateUrl: './newsandblog.component.html',
  styleUrls: ['./newsandblog.component.scss']
})
export class NewsandblogComponent implements OnInit {
  Newsdata:any;
  now:any; 

  constructor() { 
    this.now = new Date().toJSON("yyyy/MM/dd HH:mm");
  }

  ngOnInit(): void {
    this.getnewsdata();
  }
  getnewsdata(){
    //console.log("hello!");
    fetch('https://hn.algolia.com/api/v1/search_by_date?query=menstrual&tags=story')
    .then(response=>response.json())
    .then(data=>{this.setNewsData(data);})
  }
  setNewsData(data:any){
     
    this.Newsdata = data; 
   // console.log(this.now); 
   // console.log(data.hits[0].created_at);
  }
}
