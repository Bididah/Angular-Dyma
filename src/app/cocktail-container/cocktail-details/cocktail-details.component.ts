import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  @Input() cocktail!: Cocktail;
  constructor(private panierService: PanierService) {}

  ngOnInit(): void {}

  addToPanier(): void {
    console.log(this.cocktail.ingredients)
    this.panierService.addPanier(this.cocktail.ingredients)
  }
 }
