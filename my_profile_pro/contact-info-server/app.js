const express = require('express');
const contact = require('./routers/contact');
const login = require('./routers/login');
const app = express();
const cors = require('cors');
app.use(cors());          // we need to add cors to use express

const mongoose = require('mongoose');
require('dotenv').config({ path: './parameters' });      // whether it is dev or prod
const {mongoURI} = require('./parameters/dev');
app.use(express.json());         // to get req.body (as a body)
app.use(express.urlencoded({ extended: false }));

let port = 8000;

// Set up mongoose connection;
// let dev_db_url = 'mongodb+srv://shirishamadas:Shirisha333!@cluster0.ilevf2r.mongodb.net/?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || mongoURI;  // to get mongodb url
console.log(mongoDB,'mongoDB');
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;  
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', () => console.log('successfully connected to mongodb!!'));

app.use('/contact', contact);

app.use('/login', login)

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

// app.use('/', (req,res) =>{
//     res.send("hello world");
// })

