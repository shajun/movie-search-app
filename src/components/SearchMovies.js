import React from "react";

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = "北京";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=b1210020bfa1bcf17ffdc3343b69b3ee&language=zh-CN&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchMovies;
