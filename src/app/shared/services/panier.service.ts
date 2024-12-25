import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Ingredient } from "../interfaces/ingredient.interface";
import { IngredientListComponent } from "src/app/panier-container/ingredient-list/ingredient-list.component";

@Injectable({
  providedIn: "root",
})
export class PanierService {
  private _ingredients = new BehaviorSubject<Ingredient[] | null>(null);

  constructor() {}

  get currentIngredients(): Ingredient[] | null {
    return this._ingredients.value;
  }

  get ingredients$(): Observable<Ingredient[] | null> {
    return this._ingredients.asObservable();
  }

  addPanier(ingredients: Ingredient[]): void {
    if (this.currentIngredients) {
      const count = [...this.currentIngredients, ...ingredients].reduce((acc: { [key: string]: number }, value) => {
        if (acc[value.name]) {
          acc[value.name] += value.quantity;
        } else {
          acc[value.name] = value.quantity;
        }
        return acc;
      }, {} as { [key: string]: number });

      const result = Object.keys(count).map((key) => ({
        name: key,
        quantity: count[key],
      }));
      this._ingredients.next(result);
    } else {
      this._ingredients.next(ingredients);
    }
  }
}
