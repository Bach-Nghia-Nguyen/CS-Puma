import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

const BookCard = ({ title, cover, author, showDetail }) => {
  return (
    <Card
      // style={{
      //   width: "12rem",
      //   height: "32rem",
      //   marginBottom: "2rem",
      // }}
      className="book-card"
      onClick={showDetail}
    >
      <Card.Img variant="top" src={cover} />
      <Card.Body className="card-body">
        <div>
          <Card.Title className="card-book-title">{title}</Card.Title>

          {author !== "Unknown" ? (
            <Card.Text>@{author}</Card.Text>
          ) : (
            <Badge variant="danger" className="unknown-author">
              Unknown author
            </Badge>
          )}
        </div>

        <button type="button" className="btn btn-secondary">
          See Detail
        </button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
