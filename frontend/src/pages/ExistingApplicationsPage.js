// src/pages/ExistingApplicationsPage.js

import React from 'react';
import '../styles/ExistingApplicationsPage.css';

const applications = [
  { id: 1, college: 'Harvard', status: 'Accepted' },
  { id: 2, college: 'MIT', status: 'Pending' },
  { id: 3, college: 'Stanford', status: 'Rejected' },
];

const ExistingApplicationsPage = () => {
  return (
    <div className='existing-applications-page'>
      <h1>Existing Applications</h1>
      <table>
        <thead>
          <tr>
            <th>College</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.college}</td>
              <td>{application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExistingApplicationsPage;
