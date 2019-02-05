const MongoClint = require("mongodb").MongoClient;
const { ObjectID } = require("mongodb");
MongoClint.connect("mongodb://localhost:27017/TodoApp", (err, clint) => {
  if (err) {
    return console.log("unable to connect to MongoDB server");
  }
  console.log("connnected to mongodb server");
  const db = clint.db("TodoApp");

  db.collection("Users")
    .find({ name: "ali" })
    .toArray()
    .then(
      result => {
        console.log(JSON.stringify(result, undefined, 2));
      },
      err => {
        console.log(err);
      }
    );

  // db.collection("Todos")
  //   .find({
  //     //   _id: ObjectID("5c589e6bcf059b5fdcb43ae7")
  //   })
  //   .count()
  //   .then(
  //     count => {
  //       console.log(`Todos count:${count}`);
  //     },
  //     err => {
  //       console.log("unable to fetch todos", err);
  //     }
  //   );

  //db.close();
});
