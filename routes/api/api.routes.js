/*
Import & config
*/
const express = require('express');

const apiRouter = express.Router();
//

/*
Définition
*/
class ApiRouterClass {
  constructor() {}

  routes() {
    //= > Api Routes
    apiRouter.get('/d3', (req, res) => {
      res.render('d3');
    });
  }

  init() {
    this.routes();
    return apiRouter;
  }
}
//

/*
Export
*/
module.exports = ApiRouterClass;
//
