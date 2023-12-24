import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url ="http://127.0.0.1:8000/"

  constructor(private http:HttpClient) {}

  getImages(){
    // return this.http.get<Images>(this.url)
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  searshByImages(data:any){
    // return this.http.get<Images>(this.url)
    console.log(data)
    return this.http.post(this.url+'upload/',data);

  }
}
