import { Component } from '@angular/core';
import { ImagesService } from '../../core/services/images.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private imagesService: ImagesService) {}
  onHomeClick() {
    alert('rak ghadi mzn kmel');
  }
  onFileSelected(event: any) {
    // console.log('event', event);
    let imagePath = '';
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      imagePath = e.target.result;
      // console.log('Image Path:', imagePath);
      // You can now use the image path or perform further operations here
    };

    reader.readAsDataURL(file);
    this.searshByImage(imagePath);
  }

  searshByImage(data: any) {
    const form:any = document.getElementById('imageForm');
    const formData = new FormData(form);

    // console.log("header",data)
    console.log("header",formData)
    this.imagesService.searshByImages(formData).subscribe({
      next: (data) => {
        // console.log('test', data);
      },
      error: (error) => {
        // console.log('test', error);
      },
    });
  }
}
