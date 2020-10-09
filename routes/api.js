// import axios from 'axios';
// const BASEURL = 'https://app.ticketmaster.com/discovery/v2/events.json?size=50';
// const APIKEY = 'Agwlo6QHZKgKF1nFO4tM5eSQ54RQLrOU';
// // Export an object with a 'search' method that searches the Giphy API for the passed query
// // Events API Call based on User postCode
// export default {
//   search: function (postalCode) {
//     return axios.get(
//       BASEURL + '&postalCode=' + postalCode + '&apikey=' + APIKEY
//     );
//   },
// };
var db = require('../models');
module.exports = function(app) {
  // Get route for returning events of a specific Calendar
  app.get('/api/posts/calendar/:calendar', function(req, res) {
    db.Calendar.findAll({
      where: {
        type: req.params.calendar
      }
    })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
  // Get route for retrieving a single event
  app.get('/api/event/:id', function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
  // POST route for saving a new event
  app.post('/api/event', function(req, res) {
    console.log(req.body);
    db.Event.create({
      event: req.body.title,
      eventDate: req.body.date,
    })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
    // POST route for saving a new comment
  app.post('/api/comment', function(req, res) {
    console.log(req.body);
    db.Comment.create({
      comment: req.body.title,
      userName: req.user,
    })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
};