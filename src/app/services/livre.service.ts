import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
 livre!:Livre;
  livres : Livre[]; 
  constructor(){
  this.livres = [
    {idlivre : 1, nomlivre : "Le Petit Prince", nomauteur : "Antoine de Saint-Exupéry",  datepublication : new Date("04/06/1943")},
    {idlivre : 2, nomlivre : "L'étranger", nomauteur : "Albert Camus",  datepublication : new Date("07/01/1972")},
    {idlivre : 3, nomlivre :"Mémoires de guerre, tome 1 : L'Appel 1940-1942",nomauteur : "Charles de Gaulle",  datepublication : new Date("01/10/1999")}
     ];
    }
    listelivre():Livre[] {
      return this.livres;
}
ajouterlivre(liv: Livre){
  this.livres.push(liv);
  }
  
  supprimerlivre( liv: Livre){
    
    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
    this.livres.splice(index, 1);
    }
    
    }
    consulterlivre(id:number): Livre{
      this.livre= this.livres.find(p => p.idlivre == id)!;
      return this.livre;
      }
      
      trierlivre(){
        this.livres = this.livres.sort((n1,n2) => {
        if (n1.idlivre! > n2.idlivre!) {
        return 1;
        }
        if (n1.idlivre! < n2.idlivre!) {
        return -1;
        }
        return 0;
        });
        }
        
      updateLivre(l:Livre)
     {
         this.supprimerlivre(l);
         this.ajouterlivre(l);
         this.trierlivre();
  }       

}
