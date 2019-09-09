import { NewsService } from './../news-list.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../news/news.model';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  title_news = 'Create News'; 
  cars: Car = {
    title: '',
    model:'',
    categories: '',
    description: '',
    author: '',
    date: null,
    imageUrl: ''
  }
  constructor(private carService: NewsService) { }
  
  ngOnInit() {

  }
  Submit(){
    if( this.cars.description !== '') {
      this.carService.addItem(this.cars);

      this.cars.title = '';
      this.cars.description = '';
      this.cars.date = null;
      this.cars.author = '';
      this.cars.imageUrl = '';
    }
  }
}
