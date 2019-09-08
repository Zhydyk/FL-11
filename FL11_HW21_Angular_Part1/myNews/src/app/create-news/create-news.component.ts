import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  title_news = 'Create News'; 
  constructor() { }
  Submit(){
    console.log('Ok');
  }
  ngOnInit() {
  }

}
