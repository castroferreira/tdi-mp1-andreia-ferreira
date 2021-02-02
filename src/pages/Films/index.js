import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFilms } from "../../api/index";
import Loading from '../../components/Loading';
import '../../styles/films.css';


const Films = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilm] = useState([]);

  useEffect(() => {
    setIsLoading(true)

    getFilms()
      .then(film => {
        setFilm(film.results);
        setIsLoading(false);
      })
  },
    []);


  //const allFilms = films.map((film, index) => {
  const allFilms = films.map((film, index) => {
    return (
      <li key={index} className="cards__item" >
        <article className="card card--2">
          <div className="card__info">
            <Link to={"/films/"+index._id}>
              <h3 className="card__title">
                Episode {film.episode_id} - <b>{film.title}</b></h3>
            </Link>
          </div>
          <span className="card__by">
            <a href="#" className="card__author" title="author"><b>Diretor: </b>{film.director}</a>
            <a href="#" className="card__date" title="author"><br ></br>{film.release_date}</a>
          </span>

        </article>
      </li>
    )
  })
  return (
    <div className="fundo-cards">
      {
        !isLoading ? //<Loading> </Loading>
          (
            <div className="films"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh',
                fontFamily: 'Star Jedi',
                backgroundColor: '#17182f'
              }}
            >
              <h1 className="maintitle">Films</h1>
            </div>
          )
          : <Loading />}

      <ul className="cards pb-4"
        style={{
          fontFamily: 'Arial',
          color: 'white'
        }}>
        {allFilms}
      </ul>
    </div>
  );
}

export default Films;