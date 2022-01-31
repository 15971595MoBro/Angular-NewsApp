import { Component, OnInit } from '@angular/core';
import { MtnewsapiService } from '../service/mtnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css'],
})
export class TopheadlineComponent implements OnInit {
  constructor(private api: MtnewsapiService) {}

  //display headlines data
  topHeadlinesData: any = [];

  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result) => {
      this.topHeadlinesData = result.articles;
    });
  }
}
