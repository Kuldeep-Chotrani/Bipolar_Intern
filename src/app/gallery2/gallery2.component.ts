import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css']
})
export class Gallery2Component implements OnInit {

  constructor(private apiService: ApiService) { }
  Items: any;
  page:0;
  size =10;
  ngOnInit(): void {
    this.apiService.getImage1().subscribe((resp: any) => {
      this.Items = resp;
      console.log(resp);
    });
  }

}
