import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true
    },
    email: {
      type: String,
      // required: true
    },
    phone: {
      type: String,
      // required: true
    },
    city: {
      type: String,
      // required: true
    },
    sublocation: {
      type: String,
    },
    builder: {
      type: String,
      // required: true
    },
    project: {
      type: String,
      // required: true
    }
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
);

export const Lead = mongoose.model("Lead", schema);
