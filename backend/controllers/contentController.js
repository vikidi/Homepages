const Content = require('../models/content');

const getContent = async (req, res) => {
  const content = await Content.findOne({ componentName: req.params.component }).exec();

  if (!content) {
    return res.status(404).end();
  }

  res.json(content);
};

const updateContent = async (req, res) => {
  const content = req.body;

  const response = await Content.findByIdAndUpdate(req.params.id, content, { new: true });

  if (!response) {
    return res.status(404).end();
  }

  return res.json(response);
};

module.exports = {
  getContent,
  updateContent
};