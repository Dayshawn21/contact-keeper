const express = require('express');
const router = express.Router();

//@ROUTE Get api/auth

//desc    get logged in user

//access private

router.get('/', (req, res) => {
	res.send('Get logged in user ');
});

//@ROUTE Post  api/auth

//desc    Auth user & get token

//access public

router.post('/', (req, res) => {
	res.send('log in user ');
});
module.exports = router;
