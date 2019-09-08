import { NewsListService } from './../news-list.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title_news = 'Source News';
  filteredNews = [];
  item = [];
  constructor(private carService: NewsListService) { }

  ngOnInit() {
    this.item = this.carService.getNews();
    this.filteredNews = this.item;
  }

}
