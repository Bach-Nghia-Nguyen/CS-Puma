import React from "react";
import { Container, Row, Alert, Badge } from "react-bootstrap";
import { ScaleLoader } from "react-spinners";

const BookDetailCard = ({
  singleBook,
  baseURL,
  handleGoBack,
  errorMessage,
  addToReadingList,
  loading,
}) => {
  return (
    <Container className="detail-container">
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      {loading ? (
        <div className="loader-div d-flex flex-row justify-content-center align-items-center">
          <ScaleLoader
            color="#3F3BA7"
            height={100}
            width={20}
            radius={50}
            margin={5}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <Row className="mt-3">
            <button className="btn btn-dark" onClick={() => handleGoBack()}>
              Back to library
            </button>
          </Row>

          <Row className="mt-4">
            {singleBook && (
              <img
                className="book-detail-cover"
                src={`${baseURL}/${singleBook.imageLink}`}
                alt="Book Cover"
              />
            )}
            <div className="detail-info-section">
              <h3 className="book-detail-title">{singleBook?.title}</h3>

              {singleBook && singleBook.author !== "Unknown" ? (
                <p>Author: {singleBook.author}</p>
              ) : (
                <p>
                  Author: <Badge variant="danger">Unknown</Badge>{" "}
                </p>
              )}

              <p>Origin: {singleBook?.country}</p>

              <p>Original language: {singleBook?.language}</p>

              <p>Year of publication: {singleBook?.year}</p>

              <p>Pages: {singleBook?.pages}</p>

              <div className="detail-button-group">
                <a
                  href={`${singleBook?.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="btn btn-info">
                    Learn more
                  </button>
                </a>

                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => addToReadingList(singleBook)}
                >
                  Read
                </button>

                <button type="button" className="btn add-to-favorite">
                  Add to favorite
                </button>
              </div>
            </div>
          </Row>
        </>
      )}
    </Container>
  );
};

export default BookDetailCard;
