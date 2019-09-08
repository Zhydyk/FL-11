import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsLineDetailsComponent } from './news-line-details/news-line-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'create-news', component: CreateNewsComponent},
  {path: 'news-details', component: NewsLineDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
