import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-line-details',
  templateUrl: './news-line-details.component.html',
  styleUrls: ['./news-line-details.component.scss']
})
export class NewsLineDetailsComponent implements OnInit {
  title_newsDetails = 'Details Source News';
  constructor() { }

  ngOnInit() {
  }

}
