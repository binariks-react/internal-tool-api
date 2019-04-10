const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
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
    position: {
      type: String,
      enum: ['developer', 'lead', 'recruiter', 'CEO', 'PM', 'QA'],
      required: true,
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


const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;
