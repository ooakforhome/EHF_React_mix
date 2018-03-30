const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const app = express();

// Set Portal
const PORT = process.env.PORT || 3001;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/EHF",
  {
    useMongoClient: true
  }
);

// Middleware
app.use(bodyParser.json());
app.use(express.static("client/public"));

// Set up promises with mongoose
mongoose.Promise = global.Promise;

const routes = require("./controllers/lhController");
app.use(routes);

// Mongo URI
const mongoURI = 'mongodb://localhost/EHF';

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

//init gfs
let gfs;

conn.once('open', ()=> {
  gfs = Grid(conn, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// @route POST /upload
// @desc  Uploads file to DB
app.post('/upload', upload.single('file'), (req, res) => {
  // res.json({ file: req.file });
  console.log(res);
});

//------------------------------------------------------------------------------
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
