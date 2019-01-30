import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from '../services/activite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-activitie',
  templateUrl: './consult-activitie.component.html',
  styleUrls: ['./consult-activitie.component.scss']
})
export class ConsultActivitieComponent implements OnInit {
  parametre1: String = "";
  parametre2: String = "";
  btnText: String = "Supprimer";
  btnRetour: String = "Retour";

  constructor(maRoute: ActivatedRoute, activiteService: ActiviteService, monRouteur: Router) {
    this.parametre1 = activiteService.objectifs[maRoute.snapshot.params["param1"]];


    if (maRoute.snapshot.params["param2"] != null) {
      this.parametre2 = maRoute.snapshot.params["param2"];
    }
  }

  ngOnInit() {
  }

  isParam2Null () {
    if (this.parametre2 == "") return true;
    return false;
  }

  removeElem(index) {
    this.activiteService.objectifs.splice(index, 1);
    this.monRouteur.navigate(['']);
  }

  retourHome() {
    this.monRouteur.navigate(['']);
  }

}
