import React from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <a href="/stats">Stats</a>
      <br/>
      <a href="/occupation">Occupations</a>
      <br/>
      <a href="/skills">Skills</a>
    </div>
  );
};

export default Home;