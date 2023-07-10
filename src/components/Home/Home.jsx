import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/stats')}>Start crating a character</button>
    </div>
  );
};

export default Home;