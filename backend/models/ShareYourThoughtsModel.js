const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShareThoughtSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  isMostLiked: {
    type: Boolean,
    default: false
  },
  date: {
    type: Boolean,
    default: false
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
  relationships: {
    type: Boolean,
    default: false
  },
  friends: {
    type: Boolean,
    default: false
  },
  dateposted: {
    type: Date,
    default: Date.now
  }
});

ShareThoughtSchema.index({ dateposted: 1 });

const ShareThought = mongoose.model('ShareThought', ShareThoughtSchema);
module.exports = ShareThought;
