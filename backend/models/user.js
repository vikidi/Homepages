const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

const roleList = require('./userRoles').roleList;
const defaultRole = require('./userRoles').lowestRole;

const permissionList = require('./userPermissions').permissionList;
const groupList = require('./userGroups').groupList;

mongoose.set('useCreateIndex', true);

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  nickname: {
    type: String,
    maxlength: 20
  },
  password: {
    type: String,
    required: true,
    maxLength: 60,
    minlength: 60
  },
  role: {
    type: [ String ],
    required: true,
    enum: roleList,
    default: [ defaultRole ]
  },
  permission: {
    type: [ String ],
    required: true,
    enum: permissionList,
    default: []
  },
  group: {
    type: [ String ],
    required: true,
    enum: groupList,
    default: []
  },
  signupDate: {
    type: Date,
    required: true,
    default: Date.now(),
    immutable: true
  },
  changes: {
    type: [{
      user: mongoose.ObjectId,
      time: Date,
      comment: String
    }],
    required: true,
    default: []
  }
});

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  }
});

UserSchema.pre(
  'save',
  async function(next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    this.password = hash;
    next();
  }
);

UserSchema.methods.isCorrectPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

UserSchema.statics.isValidPassword = async function(password) {
  if (password.length > 18 || password.length < 8) {
    return false;
  }

  return true;
};

UserSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;