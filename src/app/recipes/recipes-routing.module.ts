import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';


const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ] },
];

// use forChild() becuase this module is a child module of AppModule
@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    providers: [AuthGuard], // Guard is the only thing you should add to routing module
    exports: [RouterModule]
})
export class RecipesRoutingModule {}
