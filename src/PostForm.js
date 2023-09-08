import React, { useState } from 'react';
import './App.css';

function PostForm() {
  const [response, setResponse] = useState(null);
  const [formData, setFormData] = useState({
    college_email: '',
    college_roll_number: '',
    numbers: [],
    alphabets: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your API
    const url = '/bfhl'; // Relative URL to your backend API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    setResponse(responseData);
  };

  return (
    <div>
      <h2>POST Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="college_email">College Email:</label>
          <input
            type="text"
            id="college_email"
            value={formData.college_email}
            onChange={(e) =>
              setFormData({ ...formData, college_email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="college_roll_number">College Roll Number:</label>
          <input
            type="text"
            id="college_roll_number"
            value={formData.college_roll_number}
            onChange={(e) =>
              setFormData({
                ...formData,
                college_roll_number: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="numbers">Numbers (comma-separated):</label>
          <input
            type="text"
            id="numbers"
            value={formData.numbers.join(',')}
            onChange={(e) =>
              setFormData({
                ...formData,
                numbers: e.target.value.split(',').map((num) => parseInt(num)),
              })
            }
          />
        </div>
        <div>
          <label htmlFor="alphabets">Alphabets (comma-separated):</label>
          <input
            type="text"
            id="alphabets"
            value={formData.alphabets.join(',')}
            onChange={(e) =>
              setFormData({
                ...formData,
                alphabets: e.target.value.split(','),
              })
            }
          />
        </div>
        <button type="submit">Submit POST Request</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

export default PostForm;
