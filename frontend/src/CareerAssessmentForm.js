// CareerAssessmentForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CareerAssessmentForm = () => {
  const [traits, setTraits] = useState('');
  const [interests, setInterests] = useState('');
  const [skills, setSkills] = useState('');
  const [predictedCareer, setPredictedCareer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/predictCareer', { traits, interests, skills });
      setPredictedCareer(response.data.career);
    } catch (error) {
      console.error('Error predicting career:', error);
    }
  };

  return (
    <div>
      <h2>Career Assessment Test</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Traits:
          <input type="text" value={traits} onChange={(e) => setTraits(e.target.value)} />
        </label>
        <label>
          Interests:
          <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} />
        </label>
        <label>
          Skills:
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </label>
        <button type="submit">Predict Career</button>
      </form>
      {predictedCareer && <p>Predicted Career: {predictedCareer}</p>}
    </div>
  );
};

export default CareerAssessmentForm;
