import React, { Component } from "react";
import PropTypes from "prop-types";

import './movie.scss'
 
function Movies({ rank, movieNm }) {
  return (
    <div className="Movie">
      <p>
        {rank}위:{movieNm}
      </p>
    </div>
  );
}
 
Movies.propTypes = {
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired
};
 
export default Movies;