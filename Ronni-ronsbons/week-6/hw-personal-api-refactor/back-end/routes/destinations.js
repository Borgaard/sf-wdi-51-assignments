const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers');

router.get('/', controllers.destinations.index);
router.post('/', controllers.destinations.create);
// [] DO I HAVE TO PUT A VARIABLE REPRESENTING _ID HERE AFTER '/'?
router.delete('/', controllers.destinations.delete);

module.exports = router;