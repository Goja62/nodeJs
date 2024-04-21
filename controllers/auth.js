exports.getLogin = (req, res, next) => {
  const isLogged =
    req.get('Cookie').split(';').pop().trim().split('=')[1] === true;
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLogged,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true;');
  res.redirect('/');
};
