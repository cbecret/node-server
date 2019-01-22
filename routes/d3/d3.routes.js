/*
Import & config
*/
const express = require('express');

const d3Router = express.Router();
//

/*
Définition
*/
class D3RouterClass {
  constructor() {}

  routes() {
    //= > Api Routes
    d3Router.get('/', (req, res) => {
      res.json({ msg: "Hello API" });
    });
  }

  init() {
    this.routes();
    return d3Router;
  }
}
//

/*
Export
*/
module.exports = D3RouterClass;
//
