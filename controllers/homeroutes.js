const router = require('express').Router();
const  User  = require('../models/User');
const withAuth = require('../utils/auth');


// stops non logged in users from accessing page
router.get('/', withAuth, async (req, res) => {
  try {
    const logData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = logData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // sends logged in
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // session redirects to home page if it exists
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signUp', (req, res) => {
 // session redirects to home page if it exists
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
