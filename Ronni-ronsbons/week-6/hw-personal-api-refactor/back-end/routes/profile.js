const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers');

router.get('/', controllers.profile.show);

module.exports = router;