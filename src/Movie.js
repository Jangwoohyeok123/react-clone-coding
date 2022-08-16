import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// ReactDOM.render 의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <h3 className="movie_title">{title}</h3>
      <h5 className="movie_year">{year}</h5>
      <p className="movie_summary">{summary}</p>
      <ul className="genres">
        {genres.map((genre, index) => (
          <li key={index} className="genres__genre">
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

// branch main test

