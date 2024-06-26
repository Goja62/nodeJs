const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
  '/login',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail(),
    body(
      'password',
      'Please enter a password with only numbers and text an at least 5 characters'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
  ],
  authController.postLogin
);

router.post('/logout', authController.postLogout);

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter valid email')
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email: ' + value + ' is forbiden!');
        // }
        // return true;
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              'E-mail exists alredy, please pick different one!'
            );
          }
        });
      })
      .normalizeEmail()
      .trim(),
    body(
      'password',
      'Please enter a password with only numbers and text an at least 5 characters'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body('confirmPassword')
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords have to match');
        }
        return true;
      }),
  ],
  authController.postSignup
);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
