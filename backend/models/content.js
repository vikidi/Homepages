const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const ContentSchema = new mongoose.Schema({
  componentName: {
    type: String,
    required: true,
    unique: true
  },
  lastChanged: {
    type: Date
  },
  content: {
    type: Map,
    of: String
  }
});

ContentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

ContentSchema.plugin(uniqueValidator);

const ContentModel = mongoose.model('content', ContentSchema);

module.exports = ContentModel;