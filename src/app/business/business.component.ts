import { Component, OnInit } from '@angular/core';
import { MtnewsapiService } from '../service/mtnewsapi.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  constructor(private api: MtnewsapiService) {}
  //BusinessNewsData
  businessNewsData: any = [];
  ngOnInit(): void {
    this.api.tcBusinessNews().subscribe((result) => {
      this.businessNewsData = result.articles;
    });
  }
}
