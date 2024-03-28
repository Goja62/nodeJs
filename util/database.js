const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://gortnar:1111Goja@cluster0.ldscajh.mongodb.net/'
  )
    .then((client) => {
      console.log('Connected');
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
