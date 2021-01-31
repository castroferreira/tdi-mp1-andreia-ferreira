import React, { useEffect, useState } from 'react';
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


  const allFilms = films.map((film, index) => {
    return (
      <>
        <div className="info">
          <div className="title-film">

            <p className="title" style={{ color: '#dba90d', fontFamily: 'Star Jedi' }}>Episode {film.episode_id} - <b>{film.title}</b></p>
            <p style={{ color: 'white' }}>{film.opening_crawl}</p>
          </div>
        </div>
        

      </>
    )
  })
  return (
    <>
      {
        isLoading ? <Loading> </Loading>
          :
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                fontFamily: 'Star Jedi',
                backgroundColor: '#17182f'
              }}
            >
              <h1 className="maintitle">Films</h1>


            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Arial',
                color: 'white',
                backgroundColor: '#17182f'
              }}
            >{allFilms}</div>

          </>
      }
    </>
  );
};

export default Films;