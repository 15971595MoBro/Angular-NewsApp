import { Component, OnInit } from '@angular/core';
import { MtnewsapiService } from '../service/mtnewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {
  constructor(private api: MtnewsapiService) {}

  //TechNewsData
  techNewsData: any = [];
  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result) => {
      this.techNewsData = result.articles;
    });
  }
}
