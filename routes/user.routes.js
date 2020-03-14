const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  !req.user ? res.redirect('/no-permission') : res.render('logged');
});

router.get('/profile', (req, res) => {
  !req.user ? res.redirect('/no-permission') : res.render('userProfile');
});

router.get('/profile/settings', (req, res) => {
  console.log(req.user);
  !req.user ? res.redirect('/no-permission') : res.render('userProfileSettings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;