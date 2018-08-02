const Article = require('../models/Article');

class ArticleController {
  static create(req, res) {
    Article.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      mediaURI: req.body.mediaURI,
      writer: req.body.writer,
      // writer field will be changed with req.header.token which will then be decryppted to obtain _id pf user
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
    Article.find({author: req.params.author}, function (err, response) {
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
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      mediaURI: req.body.mediaURI,
      writer: req.body.writer,
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
