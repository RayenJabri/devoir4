import { LivreService } from './../services/livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit{
 
  livres? : Livre[]; //un tableau de Produit
constructor(private LivreService: LivreService ) {

}
  ngOnInit(): void {
    
    this.livres = this.LivreService.listelivre();
  }
  
  supprimerlivre(l: Livre)
  {
    let conf = confirm("Etes-vous sûr ?");
      if (conf)

    this.LivreService.supprimerlivre(l)
  }
}
