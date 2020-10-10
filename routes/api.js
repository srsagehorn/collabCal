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
  app.get('/api/calendar/:calendar', function(req, res) {
    console.log(req.params.calendar)
    db.Calendar.findAll({
      where: {
        type: req.params.calendar
      },
      include: [db.Event]
    })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
  // Get route for retrieving a single event
  app.get('/api/event/:id', function(req, res) {
    db.Event.findOne({
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
    // console.log('checking if im here', req, res);
    db.Event.create(
      req.body

    )
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
    // POST route for saving a new comment
  app.post('/api/comment', function(req, res) {
    console.log(req.body);
    db.Comment.create({
      comment: req.body.comment,
      userName: req.user,
    })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
};