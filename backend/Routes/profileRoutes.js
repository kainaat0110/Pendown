const express = require('express');
const router = express.Router();
const { createProfile, updateProfile, getProfile } = require('../Controllers/profileController');

router.post('/', createProfile);
router.put('/:id', updateProfile);
router.get('/:id', getProfile);

module.exports = router;
