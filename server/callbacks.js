var mongo = require( 'mongojs'),
		config = require( './config'),
		db = mongo.connect( config.db, ['songs','setlists']),
		ObjectID = require( 'mongodb').ObjectID;

module.exports = {
	getSongs: function (req, res, next) {
		db.songs.find( {}, {title:1,author:1}, function (err, data) {
			return res.json( data);
		});
	},

	getSong: function (req, res, next) {
		db.songs.findOne( {_id:ObjectID(req.params.id)}, function (err, data) {
			return res.json( data);
		});
	},

	modifySong: function (req, res, next) {
		db.songs.update( {
			_id:ObjectID(req.params.id)
		},
		{
			$set: {
				title: req.body.title,
				lyrics: req.body.lyrics
			}
		});
	},

	createSong: function (req, res, next) {
		db.songs.save( {
			title: req.body.title,
			lyrics: req.body.lyrics
		});
		res.send(200);
	},

	deleteSong: function (req, res, next) {
		db.songs.remove({_id:ObjectID(req.params.id)});
	},

	restartServer: function (req, res, next) {
		process.exit();
	}
}