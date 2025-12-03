const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/formBuilder");

const formSchema = new mongoose.Schema({
  formOwner: String,
  baseId: String,
  tableId: String,
  questions: [
    { internalQuestionKey: String },
    {
      fieldId: String,
    },
    {
      label: String,
      type: String,
      required: String,
      conditionalRules: String,
    },
  ],
});
const OauthSchema = new mongoose.Schema({
  accessToken: String,
  refreshToken: String,
  loginTimeStamp: {
    type: Date,
    default: new Date().toLocaleString(),
  },
});

const auth = mongoose.model("auth", OauthSchema);
const form = mongoose.model("forms", formSchema);

module.exports = { auth, form };
