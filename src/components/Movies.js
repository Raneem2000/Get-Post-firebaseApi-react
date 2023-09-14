import React from 'react';

function Movies(props) {  // Receive 'props' as a parameter
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.openingText}</p>
      <p>{props.releaseDate}</p>
    </div>
  );
}

export default Movies;
