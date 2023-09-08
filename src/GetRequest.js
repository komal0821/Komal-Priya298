
import React, { useState, useEffect } from 'react';

function GetRequest() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const url = '/bfhl'; 

    console.log('Sending GET request to:', url);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error('GET request failed with status:', response.status);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('GET request successful. Response data:', data);
        setResponse(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // This empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2></h2>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

export default GetRequest;
