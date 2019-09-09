import { NewsService } from './../news-list.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/news/news.model';




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title_news = 'Source News';
  cars: Car[];
  filteredNews: Car[] = [];
  constructor(private carService: NewsService) { }

  ngOnInit() {
    this.carService.getNews().subscribe(news => {
      this.cars = news;
      this.filteredNews = this.cars;
    })
  }

}
