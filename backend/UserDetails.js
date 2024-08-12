//aquiring the mongoose object
const mongoose = require("mongoose");

//defining the structure of the schema thrrough the mongoose object
const UserDetailSchema= new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, unique: true , required: true, lowercase: true
    },

    password: {
      type: String, required: true
    },
    mobileNo: {
      type: String, required: true
    }
},
  {
    //the name of collection to be exported
    collection: "UserInfo"
  });

//exporting the collection and its structure UserDetailSchema
mongoose.model("UserInfo", UserDetailSchema);
