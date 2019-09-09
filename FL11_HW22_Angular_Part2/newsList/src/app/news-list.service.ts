import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from "@angular/fire/firestore";
import { Car } from './news/news.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsCollection: AngularFirestoreCollection<Car>;
  cars = new BehaviorSubject([]);
  newsDoc: AngularFirestoreDocument<Car>;

  constructor(public afs: AngularFirestore) {
    this.newsCollection = afs.collection<Car>('car', ref => ref.orderBy('title', 'asc'));
    this.newsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Car;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe((news) => {
      return this.cars.next(news)
    })
  }

  getNews() {
    return this.cars;
  }

  addItem(cars: Car) {
    this.newsCollection.add(cars);
  }

  deleteItem( cars: Car) {
    this.newsDoc = this.afs.doc(`news/${cars.id}`);
    this.newsDoc.delete()
  }

  

}