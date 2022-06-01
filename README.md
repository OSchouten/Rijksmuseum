# Rijksmuseum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

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

## Purpose and design choices

This application is a simple searchtool for the online art collection of the Rijksmuseum. The Angular framework was used to create this application. Here I will describe some of the choices I've made while making this website and why. 

To load in information from the Rijksmuseum API I used RXJS. This library was used to allow asynchronous retrieval of data. This way while loading in the webpage and informatie the rest of the application can continue to function and execute tasks while waiting. 
I also decided to load in the pictures lazily, this reduces stress on the user's side and increases efficieny. I wanted to use lower resolution pictures for the main page results but was unable to implement this in a satisfactory way so I left it as is, this is a point of improvement to reduce the load. 

Requesting information from the Rijksmuseum API goes through services, here it is stored. When a component needs to display the information it's requested from the service. This way while swapping between pages information is stored so a person doesn't have to do the search request again. 

