const MongoClient = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  //deleteMany
  //   db.collection("Todos")
  //     .deleteMany({ text: "eat lunch" })
  //     .then(result => {
  //       console.log(result);
  //     });
  //deleteOne

  //   db.collection("Todos")
  //     .deleteOne({ text: "eat lunsh" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //findOneAndDelete

  //   db.collection("Todos")
  //     .findOneAndDelete({ completed: false })
  //     .then(result => {
  //       console.log(result);
  //     });
  // deleteMany users
  //   db.collection("Users")
  //     .deleteMany({ name: "Diana abulebbeh" })
  //     .then(res => {
  //       console.log(res);
  //     });
  //delete users
  //   db.collection("Users")
  //     .findOneAndDelete({ name: "ali" })
  //     .then(res => {
  //       console.log(res);
  //     });
});
