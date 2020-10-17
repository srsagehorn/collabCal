var db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function(app) {
  // Get route for returning events of a specific Calendar
  app.get('/api/calendar', function(req, res) {
    console.log("working")
    db.Calendar.findAll({
      where: {
        id: req
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
    console.log(req.body)
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
// creating new calendar group
  app.post('/api/group', function(req, res) {
    db.Calendar.create(req.body)
    .then(function(group) {
      res.json(group);
    })
  })
// adding user to db
  app.post('/api/user', function(req, res) {
    console.log(req.body)
    db.User.create(req.body)
    .then(function(group) {
      res.json(group);
    }).catch((err) => {
      res.status(500).json(err)
    })
  })

  app.post('/api/updategroup', function (req, res) {
    console.log(req.body.group);
    db.Calendar.findOne({ where: { group: req.body.group } })
      .then(function (calendar) {
        console.log(calendar);
        if (calendar) {
          let existing = calendar.groupmembers
          let newgroup = existing.split(",")
          if (!newgroup.includes(req.body.groupmembers)) {
            newgroup.push(req.body.groupmembers);
            newgroup = newgroup.join(",");
            console.log(newgroup)
            db.Calendar.update({
              groupmembers: newgroup
            }, { where: { group: req.body.group } })
              .then((updatedCal) => {
                res.json(updatedCal);
              })
          } else{
            res.status(403).send()
          }
        }
      })
  })

  app.get('/api/getcalendars/:calid', function( req, res ) {
    console.log(req.params.calid);
    db.Calendar.findAll({
      where: {
        groupmembers: {[Op.like]: '%' + req.params.calid + '%'}
      }
    })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  })
};