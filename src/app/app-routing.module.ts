import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    // an empty path is by default part of every route
    // redirect if full path is empty
    { path: '',  redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
