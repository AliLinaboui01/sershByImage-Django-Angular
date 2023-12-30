import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
  @Input() imagePath:String='';

  constructor(private router:Router) { }

  ngOnInit() {
  }
  preview(){
    this.router.navigate(['preview']);
  }
}
