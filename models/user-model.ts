
import {model , models, Schema} from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     phoneNumber: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     passwordConfirm: {type:String , require:true},
    // resetLink: { data: String, default: "" },
    // isAdmin: { type: Boolean, default: false, required: true },
    // favorite: {type : String }
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};
export const User =  models.User || model("User", userSchema);
