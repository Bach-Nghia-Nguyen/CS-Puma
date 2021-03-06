import React from "react";
import { Card } from "react-bootstrap";

const BookCard = ({ title, cover, author, showDetail, removeBook }) => {
  return (
    <Card className="book-card">
      <Card.Img variant="top" src={cover} />
      <Card.Body className="card-body">
        <div>
          <Card.Title className="card-book-title">{title}</Card.Title>

          {author !== "Unknown" ? (
            <Card.Text>@{author}</Card.Text>
          ) : (
            <p className="unknown-author">Unknown author</p>
          )}
        </div>

        <div className="mt-3 d-flex justify-content-start book-button-group">
          {showDetail && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={showDetail}
            >
              See Detail
            </button>
          )}

          {removeBook && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={removeBook}
            >
              Delete
            </button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
