import { Livre } from './../model/livre.model';
import { Component, OnInit } from '@angular/core';

import { LivreService } from './../services/livre.service';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  newlivre = new Livre();
  message !: string;
  constructor(private livreService: LivreService) { }
  ngOnInit(): void {
  }
  addlivre(){
    //console.log(this.newlivre);
    this.livreService.ajouterlivre(this.newlivre);
    this.message="livre "+this.newlivre.nomlivre +" ajouter avec succee"  };
    
    }
    
