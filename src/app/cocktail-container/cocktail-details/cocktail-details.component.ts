import { Component, OnInit, Input } from "@angular/core";
import { Cocktail } from "../../shared/interfaces/cocktail.interface";
import { PanierService } from "src/app/shared/services/panier.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { CocktailService } from "src/app/shared/services/cocktail.service";

@Component({
  selector: "app-cocktail-details",
  templateUrl: "./cocktail-details.component.html",
  styleUrls: ["./cocktail-details.component.scss"],
})
export class CocktailDetailsComponent implements OnInit {
  public subscribtion = new Subscription();
  public cocktail!: Cocktail;

  constructor(
    private panierService: PanierService, 
    private cockatailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscribtion.add(
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.cocktail = this.cockatailService.getCoctail(+paramMap.get("index")!);
      })
    );
  }

  addToPanier(): void {
    this.panierService.addPanier(this.cocktail.ingredients);
  }
}
