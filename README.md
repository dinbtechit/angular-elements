# AngularElements

This is a sample project which demonstrates angular elements in Angular 13.


## Build Angular Elements
```bash
npm run build-package-elements
cd vanilla-js
# open index.html in chrome browser 
```
in `index.html` now we could use angualar tags `ct-click-tracker` in an external file
```html
<!--include the dist js-->
<script src="../dist/ct-element.js"></script>

<ct-click-tracker step="5"></ct-click-tracker>

<script>
  const ctElm = document.querySelector('ct-click-tracker');
  ctElm.addEventListener('increase', (event) => {
    console.log(event.detail);
  });
</script>
```

----

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
