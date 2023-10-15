import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';
@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: []
})
export class UpdateLivreComponent implements OnInit {
  currentlivre = new Livre();
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
  private livreService: LivreService) { }
  ngOnInit() {
  this.currentlivre = this.livreService.consulterlivre(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentlivre);
  } 
  updatelivre()
{
this.livreService.updateLivre(this.currentlivre);
this.router.navigate(['livre']);
}
}
