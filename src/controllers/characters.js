// File: controllers/tvshows.js
const mongoose = require('mongoose');

const TVShow = mongoose.model('TVShow');

// GET - Return all tvshows in the DB
exports.findAllTVShows = function (req, res) {
  TVShow.find((err, tvshows) => {
    if (err) res.send(500, err.message);

    console.log('GET /characters');
    return res.status(200).jsonp(tvshows);
  });
};
