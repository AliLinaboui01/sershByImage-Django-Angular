import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImagesService } from '../../core/services/images.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private imagesService: ImagesService) {}
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  // ... other component code

  triggerFileInput() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }
  onFileSelected(event: any) {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
        const file: File = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const imagePath = e.target.result;
            // this.searshByImage(imagePath);
            console.log(imagePath)
        };

        reader.readAsDataURL(file);

    } else {
        console.error('No file selected.');
    }
}






  searshByImage(data: any) {
    const fileInput:any = document.getElementById('myImage');
    const formData = new FormData();
    formData.append('myImage', fileInput.files[0]);

    this.imagesService.searshByImages(formData).subscribe({
      next: (data) => {
        console.log('test', data);
      },
      error: (error) => {
        console.log('test', error);
      },
    });
}

}
