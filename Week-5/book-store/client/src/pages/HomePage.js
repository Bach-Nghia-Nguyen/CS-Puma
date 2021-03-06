import React, { useState, useEffect } from "react";
import api from "../apiService";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";

import library_open_image from "../images/library-open.png";

import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import PaginationBar from "../components/PaginationBar";

const baseURL = process.env.REACT_APP_BACKEND_API;

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(1);

  const limit = 8;

  const history = useHistory();

  const handleClickOnBook = (book_id) => {
    history.push(`/books/${book_id}`);
    toast.success("Book detail is here");
  };

  const handleSearchValueChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(searchInputValue);
  };

  useEffect(() => {
    const getBookData = async () => {
      setLoading(true);
      try {
        let urlForTotal = `/books`;
        const responseForTotal = await api.get(urlForTotal);
        const totalNumberOfBooks = responseForTotal.data.length;

        if (responseForTotal.status === 200) {
          if (totalNumberOfBooks % limit === 0) {
            setTotalPageNum(totalNumberOfBooks / limit);
          }

          if (totalNumberOfBooks % limit !== 0) {
            setTotalPageNum(Math.floor(totalNumberOfBooks / limit) + 1);
          }

          console.log(totalPageNum);
          setErrorMessage("");
        }

        let url = `/books?_page=${pageNum}&_limit=${limit}`;
        if (keyword) {
          url += `&q=${keyword}`;
        }
        const response = await api.get(url);
        const data = response.data;

        if (response.status === 200) {
          if (response.data.length === 0) {
            toast.error("There is no book that matches with search");
            setLoading(false);
            return;
          } else {
            setBooks(data);
            setErrorMessage("");
          }
        } else {
          setErrorMessage(`FETCH ERROR (DATA): ${data.message}`);
        }
      } catch (error) {
        setErrorMessage(`FETCH ERROR (CATCH ERROR): ${error.message}`);
      }
      setLoading(false);
    };
    getBookData();
  }, [keyword, pageNum, totalPageNum]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="text-center">
            <img src={library_open_image} alt="library" height="135px" />
          </div>

          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

          <SearchBar
            handleSearchSubmit={handleSearchSubmit}
            searchInputValue={searchInputValue}
            handleSearchValueChange={handleSearchValueChange}
          />
          <hr />
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPageNum}
          />
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
            {books ? (
              books.map((book) => (
                <li key={book.id} className="mx-2 my-3">
                  <BookCard
                    title={book.title}
                    cover={`${baseURL}/${book.imageLink}`}
                    author={book.author}
                    showDetail={() => handleClickOnBook(book.id)}
                  />
                </li>
              ))
            ) : (
              <li>There is currently no book</li>
            )}
          </ul>
        )}
      </Row>

      <Row className="justify-content-center">
        <Col>
          <hr />
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPageNum}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
