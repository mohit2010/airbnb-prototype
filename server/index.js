const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(3001, function(){
    console.log('I am running');
});






// import express from 'express';
// import { connect } from 'mongoose';
// import { DB_URI } from './config/dev';
// import FakeDb from './fake-db';

// connect(DB_URI).then(() => {
//     const fakeDb = new FakeDb();
//     fakeDb.seedDb();
// });

// const app = express();

// app.get('/rentals', function(req, res){
//     res.json({'success': true});
// });

// const PORT = process.env.PORT || 3001;

// app.listen(3001, function(){
//     console.log('I am running');
// });

