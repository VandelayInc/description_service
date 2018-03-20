const express = require('express');
const db = require('../db/model.js');
const router = express.Router();
const mongoose = require('mongoose');
import React from 'react';
import { renderToString } from 'react-dom/server';
import AppDescription from '../client/src/js/AppDescription.jsx';

router
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
  .get('/:roomid/description', (req, res) => {
    console.log('reqparams', req.params.roomid)
    db.DescriptionModel.find({id:req.params.roomid})
    .then((data) => {
      console.log('dataNORMAL ROUTER', data)
      res.json(data[0])
    })
  })
  // connection.find({id:1111}).then((results) => {
  //   console.log('results')
  // })
router
  .route('/:roomid/description/ssr')
  .get((req, res, next) => {
    db.findOne(+req.params.roomid)
      .then(desc => res.send(renderToString(<AppDescription roomId={req.params.roomid} description={desc}/>)))
      .catch(err => {
        console.log('Error retrieving description for room ', req.params.roomid, ' from database');
        res.sendStatus(404);
      });
  })
  .options((req, res) => {
    res.sendStatus(200);
  });

module.exports = router;
