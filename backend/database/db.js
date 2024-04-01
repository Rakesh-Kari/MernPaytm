import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://ramalexx189:Ramalexx123@cluster0.qixdmm4.mongodb.net/",
      {
        dbName: "Paytm_backend",
      }
    )
    .then(() => console.log("Database connection has been established"))
    .catch((e) => console.log(e));
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 5,
    maxlength: 60,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
export const Account = mongoose.model("Account", accountSchema);
