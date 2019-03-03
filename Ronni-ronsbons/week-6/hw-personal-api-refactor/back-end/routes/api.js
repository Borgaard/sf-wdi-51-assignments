const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers');

router.get('/', controllers.api.index);

module.exports = router;