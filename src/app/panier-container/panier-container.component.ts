import { Component, OnDestroy, OnInit } from "@angular/core";
import { PanierService } from "../shared/services/panier.service";
import { Subscription } from "rxjs";
import { Ingredient } from "../shared/interfaces/ingredient.interface";

@Component({
  selector: "app-panier-container",
  templateUrl: "./panier-container.component.html",
  styleUrls: ["./panier-container.component.scss"],
})
export class PanierContainerComponent implements OnInit , OnDestroy{
  public subscribtion = new Subscription();
  public ingredients: Ingredient[] | null = null;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.subscribtion.add(this.panierService.ingredients$.subscribe((ingredients) => {
      this.ingredients = ingredients
    }));
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }
}
