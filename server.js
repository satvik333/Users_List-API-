const express = require('express')
const app = express()
const port = 4000
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const User = require('./model')

mongoose.connect('mongodb+srv://satvik:satvik@cluster0.ad3tv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(
  () => {console.log('Database connection is successful') },
  err => { console.log('Error when connecting to the database'+ err)}
);

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});



    app.post('/adduser', (req, res) => {
      
        const user= new User({name: req.body.name})
        user.save().then( () => {
          res.status(200).json({'message': 'user successfully added '});
          })
          .catch(() => {
           res.status(400).send("Error when saving to database");
          });
        });
     

     app.get('/getuser', function (req, res) {
      User.find((err, users) =>{
        if(err){
          console.log(err);
        }
        else {
          res.json(users);
        }
      });
   })

   app.get('/getuser/:id', function (req, res) {
    var id = req.params.id;
    User.findById(id, (err, user) =>{
      res.json(user);
  });
 })
 app.put('/updateuser/:id/:name', (req, res) => {
  console.log(req.params.id,'idddddddddddssssssss')
  console.log(req.params.name,'idddddddddddssssssss')
  User.findById(req.params.id, (err, user) => {
    if (!user)
      return next(new Error('Error getting the todo!'));
    else {
      user.name = req.params.name;
      user.save().then( user=> {
          res.json('Todo updated successfully');
      })
      .catch(err => {
            res.status(400).send("Error when updating the todo");
      });
    }
  });
  
  })
app.delete('/deleteuser/:id', function (req, res) {
  
   User.findByIdAndRemove({_id: req.params.id}, (err,user) =>{
    if(err) res.json(err);
    else res.json('User successfully removed');
});
  
})
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
module.exports
