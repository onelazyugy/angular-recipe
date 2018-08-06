import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    // components and directives here for declaration
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    // import module that we use for this module
    imports: [
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {

}
