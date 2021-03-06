# React-contacts

### Install npx globally if you need
> Install npx module
``` sh
$ npm install -g npx
```
> From create-react-app, npx comes with npm 5.2+ and higher, see instructions for older npm versions
``` sh
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

### Create React App
> If not installed create-react-app module 
- https://github.com/facebookincubator/create-react-app/blob/master/README.md#creating-an-app
``` sh
$ npm install -g create-react-app
```

> Create new project 
```
create-react-app <Project Name What You want>
```

### Start Server
```
$ npm start
```

### Installing backend server
```
$ git clone https://github.com/udacity/reactnd-contacts-server.git
$ npm install
$ node server.js
```

### BrowserRouter
```
$ npm install react-router-dom
```

### Serialize The Form Data
``` sh
$ npm install --save form-serialize
```

### Using backend server

### Using Redux
- shared state

- the store : it contains an application's global state, all held in a single objec tree

### Pure Function
``` javascript
var square = x => ({
    return x*2;
})
```

### What is Functional Programming?
- https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

### Usa .reducer() method
- The central idea of .reduce() is that it takes in a large amount of data but returns a single value.
``` javascript
const iceCreamStats = [
    {name:'Amanda',gallonsEaten:3.8},
    {name:'Geoff', gallonsEaten:5.2},
    {name:'Tyler', gallonsEaten:1.9},
    {name:'Richard', gallonsEaten:7923}
]

iceCreamStats.reducer((accumulator,currentValue) => {
    return accumulator + currentValue.gallonsEaten
},0)
```

### props & state
