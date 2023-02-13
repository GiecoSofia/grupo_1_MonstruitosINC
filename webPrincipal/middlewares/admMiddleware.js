function admMiddleware (req, res, next){
	if(req.session.admLogged) {
		return res.redirect("/");
	}
	next();
}

module.exports = admMiddleware;