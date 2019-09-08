import { NewsListService } from './../news-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-news-line-details',
  templateUrl: './news-line-details.component.html',
  styleUrls: ['./news-line-details.component.scss']
})
export class NewsLineDetailsComponent implements OnInit {
  title_newsDetails = 'Details Source News';
  detailItem = {};
  constructor(private carService: NewsListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.detailItem = this.carService.findById(id);
  }

}
