const express = require('express');
//pick databases here, too
const db = require('../db/model.js');
// const db = require('../db/modelMySQL.js');
const router = express.Router();
const mongoose = require('mongoose');
import React from 'react';
import { renderToString } from 'react-dom/server';
import AppDescription from '../client/src/js/AppDescription.jsx';

const redis = require('redis');

// create a new redis client and connect to our local redis instance
const client = redis.createClient();

// if an error occurs, print it to the console
client.on('error', function (err) {
    console.log("Error " + err);
});




router
// vVv uncomment this to use Mongo vVv
.get('/:roomid/description', (req, res) => {
  var id = req.params.roomid;
  client.get(id, function(err, result){
    if (result){
      res.header('Access-Control-Allow-Origin', '*')
      .json(JSON.parse(result))
    } else {
      db.DescriptionModel.find({_id:id})
      .then((data) => {
        var dataString = JSON.stringify(data[0])
        client.setex(id, 60, dataString)
        res.header('Access-Control-Allow-Origin', '*')
        .json(data[0])
      })
    }
  })
})

// vVv uncomment this to use SQL vVv
  // .get('/:roomid/description', (req, res) => {
  //   let id = req.params.roomid
  //   console.log('ROOM ID', id)
  //   db.sequelize.query(`SELECT * FROM giantdata WHERE id = ${id}`)
  //     .then(data => {
  //       console.log(data[0])
  //       res.send(data[0][0])
  //     })
  // })

  // .get('/:roomid/description', (req, res) => {
  //   let id = req.params.roomid
  //   console.log('ROOM ID', id)
  //   db.connection.query(`SELECT * FROM giantdata WHERE id = ${id}`, (err, rows, fields) => {
  //     if (err) throw err
  //     console.log('query response, modelMYSql', rows[0])
  //     res.send(rows[0])
  //   })
  // })



// router
  // .route('/:roomid/description/ssr')
  // .get((req, res, next) => {
  //   db.DescriptionModel.find({_id:id})
  //   console.log(data)
  //     .then(data => res.send(renderToString(<AppDescription roomId={req.params.roomid} description={data}/>)))
  //     .catch(err => {
  //       console.log('Error retrieving description for room ', req.params.roomid, ' from database');
  //       res.sendStatus(404);
  //     });
  // })
  // .options((req, res) => {
  //   res.sendStatus(200);
  // });

module.exports = router;
