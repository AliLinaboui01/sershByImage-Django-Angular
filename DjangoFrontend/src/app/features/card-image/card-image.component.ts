import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {
  @Input() imagePath:String='';

  constructor() { }

  ngOnInit() {
  }

}
