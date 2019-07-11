const express = require('express');
const router = express.Router();

//@ROUTE Get api/contacts
//desc    Get All users contacts

//access Private

router.get('/', (req, res) => {
	res.send('Get all contacts');
});

//@ROUTE Post  api/contacts
//desc    add new contact

//access Private

router.post('/', (req, res) => {
	res.send('Add contacts');
});

//@ROUTE Put api/contacts/;id
//desc    Update

//access Private

router.put('/:id', (req, res) => {
	res.send('Update  contacts');
});

//@ROUTE delete api/contacts/;id
//desc    delete contact

//access Private

router.delete('/:id', (req, res) => {
	res.send('Delete  contacts');
});

module.exports = router;
