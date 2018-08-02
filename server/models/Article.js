const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mediaURI: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},  {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
