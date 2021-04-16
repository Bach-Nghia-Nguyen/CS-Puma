import React, { useState, useEffect } from "react";
import { Container, Row, Alert, Badge } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../apiService";

const baseURL = process.env.REACT_APP_BACKEND_API;

const BookDetailPage = () => {
  const [singleBook, setSingleBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const { id } = useParams();

  const handleGoBack = () => {
    history.push(`/`);
  };

  useEffect(() => {
    const getSingleBook = async () => {
      setLoading(true);
      try {
        let url = `/books/${id}`;
        const response = await api.get(url);
        const data = response.data;

        if (response.status === 200) {
          console.log("What's in SINGLE BOOK response", response);
          console.log("What's in SINGLE BOOK data", data);
          setSingleBook(data);
          setErrorMessage("");
        } else {
          setErrorMessage(`FETCH SINGLEBOOK ERROR: ${data.message}`);
        }
      } catch (error) {
        setErrorMessage(`CATCH SINGLEBOOK ERROR: ${error.message}`);
      }
      setLoading(false);
    };
    getSingleBook();
  }, [id]);

  return (
    <Container className="detail-container">
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

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

          <a href={`${singleBook?.link}`} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-info">
              Learn more
            </button>
          </a>

          <button type="button" className="btn btn-warning">
            Read
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default BookDetailPage;
