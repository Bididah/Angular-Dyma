import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CocktailListComponent } from "./cocktail-container/cocktail-list/cocktail-list.component";
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { SelectedDirective } from "./shared/directives/selected.directive";
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { CocktailFormComponent } from './cocktail-form/cocktail-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
