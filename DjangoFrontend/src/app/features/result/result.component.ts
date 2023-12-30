import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultMessages:String[]=[''];
  image: string = '../../../assets/'; // Set the base path for your images

  // ... other code ...

  // Function to concatenate a string with the image path
  concatImagePath(imageName: String): String {
    return this.image + imageName;
  }
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ResultComponent initialized');
    this.route.queryParams.subscribe((params) => {
      const resultMessagesString = params['resultMessages'];
      this.resultMessages = resultMessagesString ? JSON.parse(resultMessagesString) : [];
      console.log(this.resultMessages);
    });

  }


}
