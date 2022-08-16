import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/*
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
*/

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    // 객체의 render가 실행될 경우 바로 실행되는 함수
    // mount 할 경우 마지막에 일어나는 함수
    // render => componentDidMount => getMovies
    this.getMovies();
  }
  getMovies = async () => {
    // 얘는 taskque로 넘김 callStack에 eventLoop 가 올림
    // callStack 에 올리지 않겠다는 의미
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // video list 를 갖고옴
    // api 동작방식이 애초에 비동기일때 await를 붙임으로서 동기적으로 다루겠다는 의미
    this.setState({ movies: movies, isLoading: false });
    // api를 통해서 데이터를 받아온 이후로 isLoading 을 false로 바꿔주어 rerendering 한다.
    // key, value의 형태로 다룬다.
    // value의 값을 setState를 이용해서 바꾼다.
    // setState를 사용할 경우 자동으로 리렌더링이 일어난다.
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;