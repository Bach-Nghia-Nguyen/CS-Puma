import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ScaleLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../apiService";

import BookCard from "../components/BookCard";

const baseURL = process.env.REACT_APP_BACKEND_API;

const ReadingPage = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [removedBookId, setRemovedBookId] = useState("");
  const history = useHistory();

  const handleClickOnBook = (book_id) => {
    history.push(`/books/${book_id}`);
    toast.success("Book detail is here");
  };

  const removeBook = (book_id) => {
    setRemovedBookId(book_id);
  };

  useEffect(() => {
    if (removedBookId) return;
    const getFavoriteBookData = async () => {
      setLoading(true);

      try {
        let url = `/favorites`;
        const response = await api.get(url);
        const data = response.data;
        setFavoriteBooks(data);
      } catch (error) {
        toast.error(error.message);
      }
      setLoading(false);
    };
    getFavoriteBookData();
  }, [removedBookId]);

  useEffect(() => {
    if (!removedBookId) return;
    const deleteFavoriteBook = async () => {
      setLoading(true);
      try {
        await api.delete(`/favorites/${removedBookId}`);
        setRemovedBookId("");
        toast.success("The book has been removed");
      } catch (error) {
        toast.error(error.message);
      }
      setLoading(false);
    };
    deleteFavoriteBook();
  }, [removedBookId]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="text-center">
            <h1>Reading List</h1>
          </div>
        </Col>
      </Row>

      <Row>
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
          <ul className="d-flex flex-wrap justify-content-between no-bullet">
            {favoriteBooks ? (
              favoriteBooks.map((book) => (
                <li key={book.id} className="mx-2 my-3">
                  <BookCard
                    title={book.title}
                    cover={`${baseURL}/${book.imageLink}`}
                    author={book.author}
                    showDetail={() => handleClickOnBook(book.id)}
                    removeBook={() => removeBook(book.id)}
                  />
                </li>
              ))
            ) : (
              <li>There is no favorite</li>
            )}
          </ul>
        )}
      </Row>
    </Container>
  );
};

export default ReadingPage;
