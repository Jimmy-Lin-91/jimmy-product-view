const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongoUri = "mongodb://localhost/items";
const db = mongoose.connect(mongoUri, { "useNewUrlParser": true })
  .then(()=> {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log(err)
  });
const Items = mongoose.Schema({
  id: {type: Number},
  item: {type: String},
  price: {type: Number},
  imgUrl: [String],
  system: {type: String}
});

const Game = mongoose.model('Game', Items);

module.exports = Game;
