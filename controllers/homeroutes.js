const router = require('express').Router();
const User  = require('../models/User');
const Hike = require('../models/Hike');
const withAuth = require('../utils/auth');


// stops non logged in users from accessing page
router.get('/', withAuth, async (req, res) => {
  console.log('route');
  try {
    const hikeData = await Hike.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log("test");
    const hike = hikeData.map((hike) => hike.get({ plain: true }));
      res.render('homepage', {
      hike,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // session redirects to home page if it exists
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


// router.get('/signUp', (req, res) => {
//  // session redirects to home page if it exists
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('signup');
// });

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Hike }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/hike/:id', async (req, res) => {
  try {
    const hikeData = await Hike.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });
    const hike = hikeData.get({ plain: true});
    res.render('hike', {
      ...hike,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
