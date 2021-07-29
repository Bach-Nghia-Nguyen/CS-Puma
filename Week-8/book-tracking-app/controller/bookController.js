const Book = require("../model/book");

const bookController = {};

bookController.getBooks = async (req, res, next) => {
  try {
    // 1. read the query information
    let { page, limit, sortBy, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    // 2.get total book number
    const totalBooks = await Book.countDocuments({
      ...filter,
      isDelete: false,
    });

    // 3. calculate total page number
    const totalPages = Math.ceil(totalBooks / limit);

    // 4. calculate how many data you wil skip (offset)
    const offset = limit * (page - 1);

    // 5. get book based on query info
    const books = await Book.find(filter)
      .skip(offset)
      .limit(limit)
      .populate("author")
      .populate("owner");

    // 6. send bookdata + totalpage info
    res.status(200).json({
      status: "Succeed in what?",
      data: { books, totalPages },
    });

    const books = await Book.find().populate("author", "-__v -_id");

    res.status(200).json({
      status: "Succeed in getting books",
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get books",
      error: error.message,
    });
  }
};

bookController.getSingleBook = async (req, res, next) => {
  try {
    const singleBook = await Book.findById(req.params.id).populate(
      "author",
      "-__v -_id"
    );

    res.status(200).json({
      status: "Succeed in getting single book",
      data: singleBook,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get single book",
      error: error.message,
    });
  }
};

bookController.createBook = async (req, res, next) => {
  try {
    // only authenticated users can create their own book
    const userId = req.userId;
    const { title, description, author, genres } = req.body;
    const book = new Book({
      title: title,
      description: description,
      author: author,
      genres: genres,
      owner: userId,
    });
    await book.save();
    res.status(200).json({
      status: "Succeed in creating book",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to create book",
      error: error.message,
    });
  }
};

bookController.updateBook = async (req, res, next) => {
  try {
    // only authenticated users can update their own book
    const { title, description, author, genres } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title: title,
        description: description,
        author: author,
        genres: genres,
        // owner: userId ??
      },
      { new: true }
    );

    res.status(200).json({
      status: "Succeed in updating book",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to update book",
      error: error.message,
    });
  }
};

bookController.deleteBook = async (req, res, next) => {
  try {
    // only authenticated users can delete their own book
    const book = await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Succeed in updating book",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to delete book",
      error: error.message,
    });
  }
};

module.exports = bookController;
