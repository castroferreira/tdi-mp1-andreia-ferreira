import React from 'react';
import '../../styles/home.css';

const Home = () => {

  return (
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
            <h1 className="maintitle">May the force be with you</h1>
          </div>
  );
};

export default Home;