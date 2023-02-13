const User = require('../models/User');

function admLoggedMiddleware(req, res, next){

    res.locals.isLoggedAdm = false;

    if (req.session.admLogged) {
		res.locals.isLoggedAdm= true;
		res.locals.admLogged = req.session.admLogged;
	}

    next();
}

module.exports = admLoggedMiddleware;