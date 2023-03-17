import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  titreToAdd = "";
  prixToAdd = "";

  constructor() { }

  ngOnInit() {

  }

  onSubmit(form: NgForm){
    const nouvTitre = this.titreToAdd;
    const nouvPrix = this.prixToAdd;

    console.log("Nouveau titre: " + nouvTitre);
    console.log("Nouveau prix: " + nouvPrix);
  }

}
