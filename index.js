console.log('SERVER STAS IS RUNNIG 1');

var express = require('express');
var vk = require('vk-chat-bot');
////////////////////////////////////////////////
const MongoClient = require('mongodb').MongoClient;
const vice_password = "andramedan1";
const uri = "mongodb+srv://Stan:"+vice_password+"@cluster0-tqhov.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

/////////////////////// xxxxx
var app = express();/// x(1)x
/////////////////////// xxxxx

const params = {
    vkToken: '62cf2012c62371026d7a3277fc94d608fbfa754da100899e1e55d6bac8127d6217afd27033172d0d80eef',
    confirmationToken: 'b9b7a889',
    groupId: 168348230,
    secret: 'andramedan1',
    port: 3000,
  
    cmdPrefix: "/"
  };
  
  var { bot, core } = vk.bot(params);
////////////////////////////////////////////////


app.listen(3000);
console.log('SERVER STAS IS RUNNIG 2');