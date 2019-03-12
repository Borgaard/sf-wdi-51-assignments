const 
  express = require('express'),
  app = express(),
  router = express.Router(),
  jwt = require('jsonwebtoken'),
  controllers = require('../controllers')

//router.post('/signup', controllers.user.signup);

//router.post('/login', controllers.user.login);

router.use((req, res, next) => {
  console.log('activated')
  const bearerHeader = req.headers['authorization'];
  console.log('triggered token check', bearerHeader)

  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    let verified = jwt.verify(req.token, 'waffles');
    console.log('here is the verified', verified)
    req.userId = verified._id //set user id for routes to use
    next();
  } 
  else {
    res.sendStatus(403);
  }
})

router.get('/', controllers.user.show)

module.exports = router;