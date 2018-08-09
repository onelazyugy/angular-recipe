import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

/**DON'T PROVIDE ANY SERVICES IN SHARED MODULES*/
@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule, // ng-class, ng-style etc
        DropdownDirective
    ]
})
export class SharedModule {

}
