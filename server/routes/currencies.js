var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;

  axios({
      method:'get',
      url,
  })
  .then(function (response) {
      res.json(response.data);
  })
  .catch(function (error) {
      console.log(error);
  });
});

module.exports = router;
