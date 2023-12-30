import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultImages } from '../models/resultImages';

@Injectable({
  providedIn: 'root'
})
export class ImagesService{

  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private httpClient: HttpClient) {}

  getImages(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
  searshByImages(formData: FormData): Observable<any[]> {
    return this.httpClient.post<any[]>(this.apiUrl + 'upload/', formData);
  }

}
