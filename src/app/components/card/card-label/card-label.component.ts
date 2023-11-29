import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card_label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit {

  @Input()
    gameLabel:string=""

  constructor(){

  }

  ngOnInit(): void {

  }

}
