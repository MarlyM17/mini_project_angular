import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'annonce';
  prix1: number = 140;
  prix2: number = 240;
  prix3: number = 340;
  message: string = "";
  liste;

  secondes: number = 0;


  constructor (private dataService: DataService){}

  ngOnInit(): void {
    this.liste = this.dataService.listeArticles;
    const compteur = interval(1000);

    compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir aimer : " + arg;
  }
}
