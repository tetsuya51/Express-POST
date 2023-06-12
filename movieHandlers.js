const postMovie = (req, res) => {
  database

    .query(
      "INSERT INTO movies(title, director, year, color, duration) VALUES (?, ?, ?, ?, ?)",

      [title, director, year, color, duration]
    )

    .then(([result]) => {
      res.location(`/api/movies/${result.insertId}`).sendStatus(201);
    })

    .catch((err) => {
      console.error(err);

      res.status(500).send("Error saving the movie");
    });
};

module.exports = {
  postMovie, // don't forget to export your function ;)
};
