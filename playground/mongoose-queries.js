const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { ObjectID } = require("mongodb");
const { User } = require("./../server/models/user");

// var id = "5c695cadf97be55d2d765f0d3";
// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todos", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Todos", todo);
//   })
//   .catch(e => {
//     console.log(e);
//   });

var id = "5c69337d7e9e9a53c44b85e7";
if (!ObjectID.isValid(id)) {
  console.log("ID  not found");
}

User.find({
  _id: id
}).then(res => {
  console.log(res);
});

User.findOne({
  _id: id
}).then(res => {
  console.log(res);
});
User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("Id Not found");
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => {
    console.log(e);
  });
