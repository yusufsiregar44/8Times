const Article = require('../models/Article');

class ArticleController {
  static create(req, res) {
    Article.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      mediaURI: req.body.mediaURI,
      author: req.body.author,
      // author field will be changed with req.header.token which will then be decryppted to obtain _id pf user
    }, function (err, response) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        res
          .status(200)
          .send(response);
      }
    });
  }

  static readAll(req, res) {
    Article.find({}, function (err, response) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        res
          .status(200)
          .send(response);
      }
    });
  }

  static readById(req, res) {
    Article.findById(req.params.id, function (err, response) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        res
          .status(200)
          .send(response);
      }
    });
  }

  static readByCategory(req, res) {
    Article.find({category: req.params.category}, function (err, response) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        res
          .status(200)
          .send(response);
      }
    });
  }

  static readByAuthor(req, res) {
    Article.find({author: req.params.authorID}, function (err, response) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        res
          .status(200)
          .send(response);
      }
    });
  }

  static updateById(req, res) {
    Article.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, {
      new: true
    }, function (err, response) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        res
          .status(200)
          .send(response);
      }
    });
  }

  static deleteById(req, res) {
    Article.findByIdAndDelete(req.params.id, function (err, response) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        res
          .status(200)
          .send(response);
      }
    });
  }
}

module.exports = ArticleController;
