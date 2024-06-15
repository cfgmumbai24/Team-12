// // src/pages/StudentDashboard.js

// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import Card from '../components/Card';

// const StudentDashboard = () => {
//   const history = useHistory();

//   return (
//     <div>
//       <h1>Student Dashboard</h1>
//       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//         <Card title="Courses" description="View and manage your courses" route="/courses" />
//         <Card title="Existing Applications" description="View your existing applications" route="/existing-applications" />
//         <Card title="New Application" description="Create a new application" route="/new-application" />
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
// src/pages/StudentDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';


const StudentDashboard = ({ onLogout }) => {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <div>
        <Link to="/courses">
          <button>Courses</button>
        </Link>
        <Link to="/existing-applications">
          <button>Existing Applications</button>
        </Link>
        <Link to="/new-application">
          <button>New Application</button>
        </Link>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default StudentDashboard;
