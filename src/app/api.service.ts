import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  Key = "FduDe9spwVwwFvL-El8RRq3zzDQYNNTchb0cLf1lvoM";
  
  getImage(): Observable <any> {
    return this.httpClient.get(
      
    `https://api.unsplash.com/collections/1580860/photos/?client_id=${this.Key}`
    //  `https://api.unsplash.com/collections/1580860/photos/?client_id=${this.Key}`
    );
  
  }
  getImage1(): Observable <any>
  {
    return this.httpClient.get(
      `https://api.unsplash.com/collections/139386/photos/?client_id=${this.Key}`

        
    );
  }
  getImage2(): Observable <any> {
    return this.httpClient.get(
      
    
    `https://api.unsplash.com/photos/?client_id=${this.Key}`
    );
  
  }
  
}
