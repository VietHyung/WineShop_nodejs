var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/wineshop";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("wineshop");
  dbo.createCollection("orders", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
