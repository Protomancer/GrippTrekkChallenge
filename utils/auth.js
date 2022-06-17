const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');  //Or whatever title of handlebar page for User login
    } else {
      next();
    }
  };
  
  module.exports = withAuth;        