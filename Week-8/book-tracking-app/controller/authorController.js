const Author = require("../model/author");

const authorController = {};

authorController.getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();

    res.status(200).json({
      status: "Succeed in getting authors",
      data: authors,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get authors",
      error: error.message,
    });
  }
};

authorController.getSingleAuthor = async (req, res, next) => {
  try {
    const singleAuthor = await Author.findById(req.params.id);
    const booksOfAuthor = await Book.find({ author: req.params.id });

    res.status(200).json({
      status: "Succeed in getting single author",
      data: { singleAuthor, booksOfAuthor },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get single author",
      error: error.message,
    });
  }
};

authorController.createAuthor = async (req, res, next) => {
  try {
    const { name } = req.body;
    const author = new Author({ name: name });
    await author.save();

    res.status(200).json({
      status: "Succeed in creating author",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to create author",
      error: error.message,
    });
  }
};

authorController.updateAuthor = async (req, res, next) => {
  try {
    const { name } = req.body;
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      { name: name },
      { new: true }
    );

    res.status(200).json({
      status: "Succeed in updating author",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to update author",
      error: error.message,
    });
  }
};

authorController.deleteAuthor = async (req, res, next) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Succeed in deleting author",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to delete author",
      error: error.message,
    });
  }
};

module.exports = authorController;
