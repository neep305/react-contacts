# React-contacts

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
