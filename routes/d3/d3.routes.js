/*
Import & config
*/
const express = require('express');
const d3 = require('d3')
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
      res.json({ msg: "Hello API !" });
    });
    d3Router.post('/', (req, res) => {
      //=> Convertir un CSV en JSON avec D3js
      let jsonData = d3.csvParse(req.body.input);

      //=> Regex to check numeric value
      const regexNumeric = /(\d+(\.\d+)?)/;
      //=> Regex to check dates dd/mm/yyyy
      const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

      //=> Boucler sur la collection de données
      for (let i = 0; i < jsonData.length; i++) {
        let item = jsonData[i];
        console.log(jsonData[i]);

        //=> Boucler sur un objet
        for (let prop in item) {
          console.log(prop);
          console.log(item[prop]);

          //=> Vérifier les valeurs numériques
          if (regexNumeric.test(item[prop]) && !regexDate.test(item[prop])) {
            item[prop] = +item[prop];
          } else if (regexDate.test(item[prop])) {
            item[prop] = new Date(item[prop]);
          } 
        }
        
      }

      res.json({ msg: "Post data", data: jsonData });
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
