import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  id: number;
  murders= [ '聚聚' , '小樂' , '阿邦' ];
  name:string;
  ribbons = ['ribbon1', 'ribbon2', 'ribbon3', 'ribbon4'];
  ribbonStyle ="ribbon"+ this.randomTapeClass();
  colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6'];
  photoBackgroundColor ="color"+ this.randomColorClass();

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id= params['resultId'];
      this.name= this.murders[this.id - 1];
    });
  }

  randomTapeClass() {
    return Math.floor(Math.random() * (4)) +1;
  }

  randomColorClass() {
    console.log()
    return Math.floor(Math.random() * (6))+1;
  }

}
