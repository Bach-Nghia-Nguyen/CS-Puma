const Genre = require("../model/genre");

const genreController = {};

genreController.getGenres = async (req, res, next) => {
  try {
    const genres = await Genre.find();

    res.status(200).json({
      status: "Succeed in getting genres",
      data: genres,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get genres",
      error: error.message,
    });
  }
};

genreController.getSingleGenre = async (req, res, next) => {
  try {
    const singleGenre = await Genre.findById(req.params.id);

    res.status(200).json({
      status: "Succeed in getting single genre",
      data: singleGenre,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get single genre",
      error: error.message,
    });
  }
};

genreController.createGenre = async (req, res, next) => {
  try {
    const { name } = req.body;
    const genre = new Genre({ name: name });
    await genre.save();

    res.status(200).json({
      status: "Succeed in creating genre",
      data: genre,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to create genre",
      error: error.message,
    });
  }
};

genreController.updateGenre = async (req, res, next) => {
  try {
    const { name } = req.body;
    const genre = await Genre.findByIdAndUpdate(
      req.params.id,
      { name: name },
      { new: true }
    );

    res.status(200).json({
      status: "Succeed in updating genre",
      data: genre,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to create genre",
      error: error.message,
    });
  }
};

genreController.deleteGenre = async (req, res, next) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Succeed in deleting genre",
      data: genre,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to delete genre",
      error: error.message,
    });
  }
};

module.exports = genreController;
