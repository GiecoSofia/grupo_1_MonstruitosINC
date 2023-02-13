function authAdmMiddleware(req, res, next) {
	if (!req.session.admLogged) {
		return res.redirect("/loginAdministrador");
	}
	next();
}

module.exports = authAdmMiddleware;