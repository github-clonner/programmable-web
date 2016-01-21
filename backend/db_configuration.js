//  Models
var Song = require('./models/Song');
var Comment = require('./models/Comment');
var User = require('./models/User');
var Mix = require('./models/Mix');

var mongoose = require("mongoose");


/****************************
 * DB
 ****************************/

var db_url = process.env.MONGO_URL || "mongodb://localhost/test";

console.log("ENV MONGO_URL", process.env.MONGO_URL);
console.log("Connecting to db with", db_url);

mongoose.connect(db_url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("erogreugeuiguierugeryguieryguierygierguyeruigy");
    // we're connected!
    console.log("Connected to DB");

    console.log("Flushing songs collection ...");
    Song.find().remove().exec();

    var song = new Song(
        {
            image: 'http://localhost:3001/songs/1/',
            title: "Lolipop in your life",
            artist: "Moi",
            tracks: [
                {
                    name: "moi", uri: "moi.mp3"
                },
                {
                    name: "toujours moi", uri: "toujoursMoi.mp3"
                }
            ],
            mixes: []
        });
    song.addMix({mix: "oui", settings: "toujours oui"});
    song.save(function (err, songRes) {
        if (err) {
            console.log("Impossible to store stub song");
        }
        else {
            console.log("Stub song stored !");
        }
    });

    var song2 = new Song(
        {
            uri: "music/queen_champions",
            image: 'image/queen_champions.jpg',
            title: "We are the Champions",
            artist: "Queen",
            tracks: [
                {
                  "name": "basse",
                  "uri": "basse.mp3"
                },
                {
                  "name": "batterie",
                  "uri": "batterie.mp3"
                },
                {
                  "name": "guitare",
                  "uri": "guitare.mp3"
                },
                {
                  "name": "guirate 2",
                  "uri": "guitare2.mp3"
                },
                {
                  "name": "voix",
                  "uri": "voix.mp3"
                },
                {
                  "name": "piano",
                  "uri": "piano.mp3"
                }
            ],
            mixes: []
        });
    song2.addMix({
          "_id": 1,
          "author": "Hugo",
          "name": "Mon super mix"
        });
    song2.addMix({
          "_id": 3,
          "author": "Hugo",
          "name": "Mon autre mix"
        });
    song2.save(function (err, songRes) {
        if (err) {
            console.log("Impossible to store stub song");
        }
        else {
            console.log("Stub song stored !");
        }
    });


    var song3 = new Song(
        {
            uri: "music/zwiepack_summertime",
            image: 'image/zwiepack_summertime.jpg',
            title: "Zwiepack Summertime",
            artist: "Zwiepack",
            tracks: [
                {
                  "name": "Main Pair",
                  "uri": "01_MainPair.wav"
                },
                {
                  "name": "Kick",
                  "uri": "02_Kick.wav"
                },
                {
                  "name": "Snare",
                  "uri": "03_Snare.wav"
                },
                {
                  "name": "Overhead",
                  "uri": "04_Overhead.wav"
                },
                {
                  "name": "Bass Mic 1",
                  "uri": "05_BassMic1.wav"
                },
                {
                  "name": "Bass Mic 2",
                  "uri": "06_BassMic2.wav"
                },
                {
                  "name": "Bass DI",
                  "uri": "07_BassDI.wav"
                },
                {
                  "name": "Sax Mic 1",
                  "uri": "08_SaxMic1.wav"
                },
                {
                  "name": "Sax Mic 2",
                  "uri": "09_SaxMic2.wav"
                },
                {
                  "name": "Room",
                  "uri": "10_Room.wav"
                }
            ],
            mixes: []
        });
    song3.addMix({
          "_id": 1,
          "author": "Jean-Hugo",
          "name": "Wesh je mix"
        });
    song3.addMix({
          "_id": 3,
          "author": "Hugo-xavier",
          "name": "Mon autre mix"
        });
    song3.save(function (err, songRes) {
        if (err) {
            console.log("Impossible to store stub song");
        }
        else {
            console.log("Stub song stored !");
        }
    });


    console.log("Flushing user collection ...");
    User.find().remove().exec();

    var user = new User({email: "pw@pw.com", password: "yes", role: "admin"});
    user.save(function (err, userRes) {
        if (err) {
            console.log("Impossible to store stub user");
        }
        else {
            console.log("Stub user stored !");
        }
    });


    Comment.find().remove().exec();
    var comment = new Comment({
        "mix_id": "1",
        "authorName": "jean poele",
        "text": "TROP COOL",
        "date": "12334567"
    });
    comment.save(function (err, commentRes) {
        if (err) {
            console.log("Impossible to store comment");
        }
        else {
            console.log("comment stored !");
        }
    });

    Mix.find().remove().exec();
});

module.exports = db;