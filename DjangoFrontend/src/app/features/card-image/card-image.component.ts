import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {
  @Input() imagePath:String='';

  constructor(private router:Router) { }

  ngOnInit() {
  }


}
