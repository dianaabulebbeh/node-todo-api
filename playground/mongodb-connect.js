//const MongoClint = require("mongodb").MongoClient;
const { MongoClint, ObjectID } = require("mongodb");
var obj = new ObjectID();
console.log(obj);

// MongoClint.connect("mongodb://localhost:27017/TodoApp", (err, clint) => {
//   if (err) {
//     return console.log("unable to connect to mongo db server");
//   }
//   console.log("connected to mongodb server ");
//   const db = clint.db("TodoApp");
//   db.collection("Todos").insertOne(
//     {
//       text: "somthing to do",
//       completed: false
//     },
//     (err, result) => {
//       if (err) {
//         return console.log("unable to insert todo", err);
//       }
//       console.log(JSON.stringify(result.ops, undefined, 2));
//     }
//   );

//   db.collection("Users").insertOne(
//     {
//       name: "Diana abulebbeh3",
//       age: 24
//     },
//     (err, result) => {
//       if (err) {
//         return console.log("unable to insert");
//       }
//       console.log(result.ops[0]._id.getTimestamp());
//     }
//   );
//   clint.close();
// });
