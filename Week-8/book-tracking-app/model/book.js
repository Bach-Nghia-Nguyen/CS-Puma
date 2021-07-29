const Author = require("./author");
// const Genre = require("./genre");
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: [true, "Author is required"],
    },
    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
  },
  { timestamps: true }
);

bookSchema.pre("save", async function (next) {
  // check the author is existent in system
  const author = await Author.findById(this.author);
  if (author) {
    next();
  } else {
    throw new Error("that author is not existent");
  }

  // check the genre is existent in system
  // const genres = await Genre.findById(this.genres);
  // if (genres) {
  //   next();
  // } else {
  //   throw new Error("these genres are not existent");
  // }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
