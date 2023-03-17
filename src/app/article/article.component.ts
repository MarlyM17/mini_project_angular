import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  TotalLike: number = 0;
  comment: string;

  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description: string;
  @Input() urlImg: string;
  @Input() altImg: string;
  @Input() disponible: boolean;
  @Input() idArticle: number;
  jaime: boolean = true;

  @Output() info = new EventEmitter<string>();


  constructor () {}
  ngOnInit(): void {

  }

  onLike() {
    if (this.jaime === true) {
      this.TotalLike++;
      this.jaime = false;
    }else{
      this.TotalLike--;
      this.jaime = true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor(){
    if(this.disponible === true){
      return "green";
    }else{
      return "red";
    }
  }
}
