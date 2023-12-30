import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../core/services/images.service';

@Component({
  selector: 'app-liste-image',
  templateUrl: './liste-image.component.html',
  styleUrls: ['./liste-image.component.css']
})
export class ListeImageComponent implements OnInit {
  listImages :any;

  constructor(private imagesService:ImagesService) { }

  ngOnInit() {
    this.imagesService.getImages().subscribe(
      (data: any) => {
        console.log(data);
        this.listImages = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }



}
