//gridfs

GridfS(){
  - divides the file into parts (chucks), and stores each chuck as a separate document.
  - Stores files in two collections: Chunks: binary chunks, files: metadata.
  - GirdFS uses two collections to store files: 1 stores the file chunks, 2, stores file metadata
  - useful for access without having to load the entire files into memory.
}

Chunks_collections(){
  "id": <ObjectID>,
  "files_id": <ObjectID> - Specified files collection
  "n" : <num> - sequence number of the chunk
  "data" : <binary> - payload as a BSON binary type
}

bucket name should = collection name


gird = require("gridfsl-stream");

// middleware
app.use(bodyparser.json())

// create mongo connection
const conn = mongoose.createConnection(mongoURI);

// init GFS`
let gfs;

conn.once('open', () => {
  gfs = Grid();
  gfs.collection('upload');
})

// create storage engine


























//------------ref
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/gridfstest');
var conn = mongoose.connection;
var path = require('path');
var Grid = require('gridfs-stream');
var fs = require('fs');

var videoPath = path.join(__dirname, '../file/file');

Grid.mongo = mongoose.mongo;

conn.once('open', function(){
  console.log('- Connection open - ');
  var gfs = Grid(conn.db);
  var writestream = gfs.createWriteStream({
    filename: 'swimVid.mp4'
  });
  fs.createReadStream(videoPath).pipe(writestream);
  writestream.on('close', function(file){
    console.log(file)
  })

})
