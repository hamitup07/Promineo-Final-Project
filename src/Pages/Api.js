import React, { useState, useEffect } from 'react';
import "../Components/styles.css";

//Method to return Quote of the day from quotesAPI:

export default function Quote() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
      
  }, []);

  console.log(data);

  return (
    <div className='col-lg-10'>
      <br></br>
      <h1 className='quoteParagraph'>{data ? <pre className="quoteParagraph">{JSON.stringify(data.content)}</pre> : 'Loading...'}</h1>
      <p>{data ? <pre>{JSON.stringify(data.author)}</pre> : ''}</p>

    </div>
  );
}
