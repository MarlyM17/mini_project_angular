import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    {
      id: 1,
      titreArticle: "Image_1",
      prixArticle: 80,
      description: "une image",
      urlImg: "https://via.placeholder.com/420x250",
      altImg: "image test",
      disponible: false
    },
    {
      id: 2,
      titreArticle: "Image_2",
      prixArticle: 160,
      description: "une image",
      urlImg: "https://via.placeholder.com/420x250",
      altImg: "image test",
      disponible: true
    },
    {
      id: 3,
      titreArticle: "Image_3",
      prixArticle: 320,
      description: "une image",
      urlImg: "https://via.placeholder.com/420x250",
      altImg: "image test",
      disponible: false
    },
  ]

  constructor() { }

  getArticles(id: number) {
    const articles = this.listeArticles.find((a) =>{
      return a.id == id;
    });
    return articles;
  }
}
