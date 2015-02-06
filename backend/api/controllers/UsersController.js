/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	main: function(req, res){
		res.view('users/index');
	},
	renderLogin: function(req, res){
		res.view('users/login');
	},
	login: function(req, res){
		console.log(req.body);
	},
	signup: function(req, res){
		res.view('users/signup');
	},
	usersList: function(req, res){
		Users.find({}).exec(function(err, data){
			res.json(data);
		})
	}
};

