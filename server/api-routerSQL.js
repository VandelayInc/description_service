const express = require('express');
//pick databases here, too
const db = require('../db/model.js');
// const db = require('../db/modelMySQL.js');
const router = express.Router();
const mongoose = require('mongoose');
import React from 'react';
import { renderToString } from 'react-dom/server';
import AppDescription from '../client/src/js/AppDescription.jsx';

router
// vVv uncomment this to use Mongo vVv
  .get('/:roomid/description', (req, res) => {
    console.log('reqparams', req.params.roomid)
    db.DescriptionModel.find({_id:req.params.roomid})
    .then((data) => {
      console.log('dataSQL ROUTER', data)
      res.json(data[0])
    })
  })

// vVv uncomment this to use SQL vVv
  // .get('/:roomid/description', (req, res) => {
  //   let id = req.params.roomid
  //   console.log('ROOM ID', id)
  //   db.connection.query(`SELECT * FROM bigcopy WHERE id = ${id}`, (err, rows, fields) => {
  //     if (err) throw err
  //     console.log('query response, modelMYSql', rows[0])
  //     res.send(rows[0])
  //   })
  // })

// router
//   .route('/:roomid/description/ssr')
//   .get((req, res, next) => {
//     db.findOne(+req.params.roomid)
//       .then(desc => res.send(renderToString(<AppDescription roomId={req.params.roomid} description={desc}/>)))
//       .catch(err => {
//         console.log('Error retrieving description for room ', req.params.roomid, ' from database');
//         res.sendStatus(404);
//       });
//   })
//   .options((req, res) => {
//     res.sendStatus(200);
//   });

module.exports = router;



//old route
  // .route('/:roomid/description')
  // .get((req, res, next) => {
  //   console.log('REQ PARAMS', req.params.roomId)
  //   db.findOne(1111)
  //     .then(doc => {console.log('DOC', doc)
  //       res.status(200).json(doc)})
  //     .catch(err => {
  //       console.log('Error retrieving description for room ', req.params.roomid, ' from database');
  //       res.sendStatus(404);
  //     });
  // })
  // .options((req, res) => {
  //   res.sendStatus(200);
  // });
