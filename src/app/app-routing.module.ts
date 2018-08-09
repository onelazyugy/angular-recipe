import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    // an empty path is by default part of every route
    // redirect if full path is empty
    // { path: '',  redirectTo: '/recipes', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    // lazy loading of /recipe path. File name of the module follow by # follow by the name of the class
    // only load the recipe module only when we visit /recipe url
    { path: 'recipes',  loadChildren: './recipes/recipes.module#RecipesModule'},
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
