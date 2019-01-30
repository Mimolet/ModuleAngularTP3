import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nbItems: number;
  btnText: String = "Ajouter un élément";
  objectifText: String;


  constructor(public monRouteur: Router, public activiteService: ActiviteService) { }

  ajoutItem () {
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems++;
    setTimeout(() => {this.monRouteur.navigate([''])}, 1000);
  }

  ngOnInit() {
    this.nbItems = this.activiteService.objectifs.length;
  }

  modifItem (index) {
    this.monRouteur.navigate(['/consultAct/' + index]);
  }

}
