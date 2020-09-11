import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  constructor(private apiService: ApiService) { }
page=0;
size=10;
  Items: any;
  ngOnInit(): void {
    this.apiService.getImage2().subscribe((resp: any) => {
      this.Items = resp;
      console.log(resp);
    });
  }
}
