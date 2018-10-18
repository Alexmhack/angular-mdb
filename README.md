# Installation
I hope you have installed [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) already installed in your local computer.

Now for using Angular we need to install [Angular CLI](https://cli.angular.io/) using npm by 

```
npm install -g @angular/cli
```

Now create your first angular app using the commands provided by Angular CLI

```
// creates a new app named hello-world
ng new hello-world

// cd into the project folder
cd hello-world

// run server and --open opens the angular app in the browser.
ng serve --open
```

# To Do List App
We will be using [mdbootstrap angular](https://mdbootstrap.com/angular-bootstrap-getting-started/) in our project.

**For that first we need to create a new angular app**

```
ng new todo-list --style=scss
npm i angular-bootstrap-md --save
```

**Now add the angular module to** ```app.module.ts```

```
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot()
    ]
});
```

Since we used the ```--sytle=scss``` option the ```schematics``` in ```todo-list/angular.json```
will have ```"styleext": "scss"``` and if it isn't then change it to ```scss``` from ```css```
or if you want to change styles in existing project you can use ```ng set defaults.styleExt scss```
**Now add below lines to angular.json:**

```
"styles": [
    "node_modules/font-awesome/scss/font-awesome.scss",
    "node_modules/angular-bootstrap-md/scss/bootstrap/bootstrap.scss",
    "node_modules/angular-bootstrap-md/scss/mdb-free.scss",
    "src/styles.scss"
],
"scripts": [
  "node_modules/chart.js/dist/Chart.js",
  "node_modules/hammerjs/hammer.min.js"
],
```

**Final step is to install external libs**
```
npm install -–save chart.js@2.5.0 @types/chart.js @types/chart.js font-awesome hammerjs angular5-csv
```

**Run server using**

```
ng serve --o 
```

# Implementing Todo Application
**Generate Todo class using CLI**

```
// --spec creates a test file which is not needed as CLI does it by default
ng generate class todo-list/Todo --spec

// creates folder todo-list with two files
src/app/todo-list/todo.spec.ts
src/app/todo-list/todo.ts
```

Replace the code inside ```todo.ts``` with 
```
export class Todo {
    id: number;
    title = '';
    complete = false;
    category: number;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
```

**Generate TodoDataService:**

```
ng generate service todo-list/TodoData

// output
create src/app/todos/todo-data.service.spec.ts (387 bytes)
create src/app/todos/todo-data.service.ts (114 bytes)
```
