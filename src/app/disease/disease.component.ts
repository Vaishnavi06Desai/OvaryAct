import { Component, OnInit } from '@angular/core';
import { diseases } from '../JsonObjects/diseases';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent implements OnInit {
  info:any;

  constructor() { }

  ngOnInit(): void {
      this.info=diseases;
      console.log(this.info);
    }
  }

