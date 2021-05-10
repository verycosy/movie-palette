import React, { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Item from "./components/Item";
import Description from "./components/Description";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMovies } from "./lib/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies(page);
      setMovies((movies) => [...movies, ...data]);
    };

    loadMovies();
  }, [page]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Description description={"🎨 Click the palette to copy !"} />

      <Container>
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage((page) => page + 1)}
          hasMore={true}
          loader={<Loader />}
        >
          {movies?.map((movie, i) => (
            <Item
              original_title={movie.original_title}
              title={movie.title}
              src={movie.src}
              key={i}
            />
          ))}
        </InfiniteScroll>
      </Container>

      <Description description={"❤️️️️️️ Thank you ❤️"} />
      <Footer />
    </>
  );
};

export default App;
