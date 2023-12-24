import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ImagesService } from '../../core/services/images.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imageForm!: FormGroup;

  constructor( private http: HttpClient,private imagesService : ImagesService) { }

  ngOnInit(): void {
    this.imageForm =new FormGroup({
      myImage: new FormControl('')
    });
  }

  uploadImage() {

    let form: HTMLFormElement|any = document.getElementById('imageForm');
      const formData = new FormData(form);
      console.log(form)
      console.log(formData)

    // formData.append('myImage', this.imageForm.get('myImage')!.value);

    // this.http.post('http://localhost:8000/upload/', formData)
    //   .subscribe(
    //     (data: any) => {
    //       this.displayResult(data);
    //     },
    //     (error) => {
    //       console.error('Error during image upload:', error);
    //     }
    //   );
    this.imagesService.searshByImages(formData).subscribe({
      next:(response:any)=>{
        console.log('response',response);

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
  displayResult(data: any) {
    const resultMessage = data.message || 'Error during image upload.';
    console.log(resultMessage);

    // You can update your view accordingly here if needed.
  }


}
