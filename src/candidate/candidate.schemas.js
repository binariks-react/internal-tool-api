const nameProp = {
  first: {
    type: 'string',
    minLength: 3,
    maxLength: 255,
  },
  last: {
    type: 'string',
    minLength: 3,
    maxLength: 255,
  },
};

const linkedinProp = {
  profileUrl: {
    type: 'string',
    format: 'uri',
    maxLength: 511,
  },
  avatarUrl: {
    type: 'string',
    format: 'uri',
    maxLength: 511,
  },
};

const generalProp = {
  level: {
    type: 'string',
    enum: ['trainee', 'jun', 'jun+', 'mid', 'mid+', 'senior'],
  },
  language: {
    type: 'string',
    enum: ['Js', 'Java', 'Swift', 'C-sharp', 'Python', 'Kotlin', 'PHP', 'Objective-C'],
  },
  experience: {
    type: 'integer',
    minimum: 0,
    maximum: 1000,
  },
  specialization: {
    type: 'string',
    enum: ['front-end', 'back-end', 'mobile-android', 'mobile-ios'],
  },
  lastContactDate: {
    type: 'string',
    format: 'date',
  },
  comments: {
    type: 'string',
    minLength: 0,
    maxLength: 262144,
  },
};

const contactProp = {
  skype: {
    type: 'string',
    minLength: 3,
    maxLength: 255,
  },
  email: {
    type: 'string',
    minlength: 3,
    maxLength: 255,
  },
};

const createCandidateSchema = {
  body: {
    type: 'object',
    required: ['name', 'contact', 'general', 'linkedin'],
    properties: {
      name: {
        type: 'object',
        required: ['first', 'last'],
        properties: nameProp,
      },
      linkedin: {
        type: 'object',
        properties: linkedinProp,
      },
      general: {
        type: 'object',
        required: ['level', 'language', 'experience', 'specialization'],
        properties: generalProp,
      },
      contact: {
        type: 'object',
        properties: contactProp,
      },
    },
  },
  // response,
};


const updateCandidateSchema = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'object',
        properties: nameProp,
      },
      linkedin: {
        type: 'object',
        properties: linkedinProp,
      },
      general: {
        type: 'object',
        properties: generalProp,
      },
      contact: {
        type: 'object',
        properties: contactProp,
      },
    },
  },
  // response,
};

const deleteCandidateSchema = {
  // response,
};

const getCandidatesSchema = {
  // response,
};

const getCandidateSchema = {
  // response,
};

module.exports = {
  getCandidateSchema,
  getCandidatesSchema,
  createCandidateSchema,
  updateCandidateSchema,
  deleteCandidateSchema,
};
