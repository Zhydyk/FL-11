import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {
  news_list = [
    {
      id: 0,
      categories: 'car',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?',
      content: 'Avensis',
      date: '16 of September 2019',
      author: 'Toyota',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2018_Toyota_Avensis_Business_Edition_Valvematic_facelift_Estate_1.8_Front.jpg/1920px-2018_Toyota_Avensis_Business_Edition_Valvematic_facelift_Estate_1.8_Front.jpg'
    },{
      id: 1,
      categories: 'car',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?',
      content: 'GL',
      date: '16 of September 2019',
      author: 'Mercedes',
      image: 'https://cdn3.riastatic.com/photosnewr/auto/photo/mercedes-benz_gl-450__273097703-620x415x70.jpg'
    },{
      id: 2,
      categories: 'motobike',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?',
      content: 'Ninja',
      date: '16 of September 2019',
      author: 'Kawasaki',
      image: 'https://cdn1.riastatic.com/photosnewr/auto/photo/kawasaki_ninja__242070566-620x415x70.webp'
    },{
      id: 3,
      categories: 'bus',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?',
      content: 'H-1',
      date: '16 of September 2019',
      author: 'Hyndai',
      image: 'https://nahodim.com.ua/uploads/cars/new/hyundai/706/JqspTmf8kopzY4yacUNV78gv/slider_hyundai_h1.jpg'
    }
];

  constructor() { }
  addNews(item){
    this.news_list.push(item);
  };
  findById(id) {
    return this.news_list.find(item => item.id === Number(id));
  }
  getNews(){
    return this.news_list;
  }
}
