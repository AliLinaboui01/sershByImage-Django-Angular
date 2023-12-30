import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ImagesService } from '../../core/services/images.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imageForm!: FormGroup;
  resultMessages: string[] = [];
  constructor( private http: HttpClient,private imagesService : ImagesService,private router :Router) { }

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
      this.imagesService.searshByImages(formData).subscribe(
        (data) => {
          this.displayResult(data);
          this.goToResult();
        },
        (error) => {
          console.error('Error during image upload:', error);
        }
      );
  }
  displayResult(data: any) {
    this.resultMessages = data.message || 'Error during image upload.';
    console.log(this.resultMessages);
  }
  goToResult() {
    this.router.navigate(['result'], { queryParams: { resultMessages: JSON.stringify(this.resultMessages) } });
  }

}
