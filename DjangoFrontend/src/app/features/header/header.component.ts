import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImagesService } from '../../core/services/images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private imagesService: ImagesService, private router:Router) {}
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  // ... other component code
  goToHome(){
    this.router.navigate(['main'])
  }
  goToListImage(){
    this.router.navigate([''])
  }

}

