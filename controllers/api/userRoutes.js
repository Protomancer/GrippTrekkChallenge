const router = require('express').Router();
const User = require('../../models/User');

router.post('/login', async (req, res) => {
  try {
    const logData = await User.findOne({ where: { email: req.body.email } });

    if (!logData) {
      res
        .status(400)
        .json({ message: 'Login failed, please try a different email or password' });
      return;
    }

    const correctPass = await logData.checkPassword(req.body.password);

    if (!correctPass) {
      res
        .status(400)
        .json({ message: 'Login failed, please try a different email or password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = logData.id;
      req.session.logged_in = true;
      
      res.json({ user: logData, message: 'Welcome!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
