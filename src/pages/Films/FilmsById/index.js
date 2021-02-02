import React, { useEffect, useState } from 'react';
import { getFilmsById } from "../../../api/index";
import Loading from '../../../components/Loading';
import '../../../styles/films.css';


const FilmsById = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [film, setFilm] = useState([]);

  useEffect(() => {
    setIsLoading(true)

    getFilmsById(props.match.params.id)
      .then(film => {
        setFilm(film);
        setIsLoading(false);
      })
  },
    []);
  return (
    <>
      {
        isLoading ? <Loading> </Loading>
          :
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
            <h1 className="maintitle">Films by id</h1>

            <div className="info">
              <div className="title-film">
                <p className="title"><b>{film.title}</b></p>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default FilmsById;