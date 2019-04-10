const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true,
  },
  name: {
    first: {
      type: String,
      minlength: 3,
      maxlength: 255,
      required: true,
    },
    last: {
      type: String,
      minlength: 3,
      maxlength: 255,
      required: true,
    },
  },
  linkedin: {
    profileUrl: {
      type: String,
      maxlength: 511,
    },
    avatarUrl: {
      type: String,
      maxlength: 511,
    },
  },
  general: {
    level: {
      type: String,
      enum: ['trainee', 'jun', 'jun+', 'mid', 'mid+', 'senior'],
      required: true,
    },
    language: {
      type: String,
      enum: ['Js', 'Java', 'Swift', 'C-sharp', 'Python', 'Kotlin', 'PHP', 'Objective-C'],
    },
    experience: {
      type: Number,
      min: 0,
      max: 1000,
      required: true,
    },
    specialization: {
      type: String,
      enum: ['front-end', 'back-end', 'mobile-android', 'mobile-ios'],
      required: true,
    },
    lastContactDate: Date,
    comments: {
      type: String,
      minlength: 0,
      maxlength: 262144,
    },
  },
  contact: {
    skype: {
      type: String,
      minlength: 3,
      maxlength: 255,
    },
    email: {
      type: String,
      minlength: 3,
      maxlength: 255,
    },
  },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});


const User = mongoose.model('User', userSchema);
module.exports = User;
