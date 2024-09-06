const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the post
const PostQSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  life: {
    type: Boolean,
    default: false
  },
  travel: {
    type: Boolean,
    default: false
  },
  food: {
    type: Boolean,
    default: false
  },
  friends: {
    type: Boolean,
    default: false
  },
  relationship: {
    type: Boolean,
    default: false
  },
  dateposted: {
    type: Date,
    default: Date.now
  }
});

// Create an index on the dateposted field
PostQSchema.index({ dateposted: 1 });

// Create and export the model
const PostQ = mongoose.model('PostQ', PostQSchema);
module.exports = PostQ;
