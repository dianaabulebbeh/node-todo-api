var mongoose = require("mongoose");
var User = mongoose.model("User", {
  Email: {
    required: true,
    trim: true,
    type: String,
    minlength: 1
  }
});

module.exports = { User };
