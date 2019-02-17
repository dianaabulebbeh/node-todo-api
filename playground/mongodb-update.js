const MongoClient = require("mongodb").MongoClient;
const { ObjectID } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, clint) => {
  if (err) {
    return console.log("unable to connect to MongoDB server");
  }
  console.log("connnected to mongoDB server");
  const db = clint.db("TodoApp");

  //   db.collection("Todos")
  //     .findOneAndUpdate(
  //       {
  //         _id: new ObjectID("5c5936f87b783e4a30155589")
  //       },
  //       {
  //         $set: {
  //           completed: false
  //         }
  //       },
  //       {
  //         returnOriginal: false
  //       }
  //     )
  //     .then(result => {
  //       console.log(result);
  //     });

  db.collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5c58a0def7ce2a60368616bf")
      },
      {
        $set: {
          name: "diana"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
});
