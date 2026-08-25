const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // ================= USER NAME =================

    name: {
      type: String,
      required: true,
      trim: true,
    },


    // ================= EMAIL =================

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },


    // ================= PASSWORD =================

    password: {
      type: String,
      required: true,
    },


    // ================= PASSWORD RESET TOKEN =================

    resetPasswordToken: {
      type: String,
      default: null,
    },


    // ================= PASSWORD RESET EXPIRY =================

    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },


  // ================= TIMESTAMPS =================

  {
    timestamps: true,
  }
);


// ================= USER MODEL =================

const User = mongoose.model(
  "User",
  userSchema
);


// ================= EXPORT =================

module.exports = User;