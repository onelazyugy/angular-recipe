# AngularRecipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Firebase
https://console.firebase.google.com/
- project in firebase: ng-recipe-book-5425a
- url: https://ng-recipe-book-5425a.firebaseio.com/
- Database: use the realtime database
- Auth method: email and password
- database rules
- <code>{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}</code>
- login: test at test .com
- 123456

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
