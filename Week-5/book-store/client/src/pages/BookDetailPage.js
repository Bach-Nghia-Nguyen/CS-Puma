import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../apiService";

import BookDetailCard from "../components/BookDetailCard";

const baseURL = process.env.REACT_APP_BACKEND_API;

const BookDetailPage = () => {
  const [singleBook, setSingleBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addingBook, setAddingBook] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const { id } = useParams();

  const handleGoBack = () => {
    history.push(`/`);
  };

  const addToReadingList = (book) => {
    setAddingBook(book);
  };

  useEffect(() => {
    const postBook = async () => {
      if (!addingBook) return;
      setLoading(true);

      try {
        await api.post(`/favorites`, addingBook);
        toast.success("The book has been added to the reading list!");
      } catch (error) {
        toast.error(error.message);
      }
      setLoading(false);
    };
    postBook();
  }, [addingBook]);

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
    <BookDetailCard
      singleBook={singleBook}
      baseURL={baseURL}
      handleGoBack={handleGoBack}
      errorMessage={errorMessage}
      addToReadingList={addToReadingList}
      loading={loading}
    />
  );
};

export default BookDetailPage;
