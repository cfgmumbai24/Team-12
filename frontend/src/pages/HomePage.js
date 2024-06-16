import React, { useState } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import image1 from '../assets/image.png';

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState("");
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [workshopList] = useState([
    { id: 1, name: "One day career workshops" },
    { id: 2, name: "Residential ( 3 days) career workshop" },
    { id: 3, name: "Exposure Visits to premier Universities and industry" },
    // Add more workshops as needed
  ]);
  const [opportunitiesList] = useState([
    {
      id: 1,
      title: "Law Internship Program",
      shortDescription: "The Law Internship Program offers an opportunity to gain practical experience in the field of law by working on real-world projects and cases.",
      fullDescription:
        "The program includes a 3-month internship with a leading law firm, mentorship from experienced lawyers, and networking opportunities with legal professionals. Interns will also receive a stipend and a certificate upon successful completion of the program.",
    },
    {
      id: 2,
      title: "Clat Coaching Program",
      shortDescription:
        "The CLAT Coaching Program offers an opportunity to prepare for the Common Law Admission Test (CLAT) and other law entrance exams with the help of experienced mentors and comprehensive study materials.",
      fullDescription:
        "The program includes live online classes, mock tests, doubt resolution sessions, and personalized feedback to help you ace the CLAT exam and secure admission to the top law schools in India.",
    },
    // Add more opportunities as needed
  ]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleWorkshopSelect = (workshopId) => {
    setSelectedWorkshop(workshopId);
  };

  const handleOpportunitySelect = (opportunityId) => {
    setSelectedOpportunity(opportunityId);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Logic to handle email submission, e.g., send the email details to an API or mail server
    alert("Application sent successfully!");
    setEmail("");
    setMessage("");
  };

  const handleWorkshopSubmit = (e, workshop) => {
    e.preventDefault();
    // Logic to handle workshop registration, e.g., send the workshop details to an API or database
    alert(`Registered for ${workshop.name} successfully!`);
    setSelectedWorkshop("");
  };

  return (
    <div className="home-page">
      <div className="gradient">
      <header>
        <nav className="navbar">
          <h1>Eklavya India Foundation</h1>
          <div className="nav-buttons">
            <Link to="/student/login">
              <button className="btn nav-btn">For Student</button>
            </Link>
            <Link to="/mentor">
              <button className="btn nav-btn">For Mentor</button>
            </Link>
          </div>
        </nav>
      </header>
      
      <br></br>
      {/* <div className="text-image-container">
      <div className="text-content">
        <h1 style={{color: 'rgb(98, 28, 28)', fontSize: '80px'}}>Education <br></br> for <br></br> Change</h1>
        <p>Empowering individuals through quality education and impactful initiatives.</p>
      </div>
      <img src={image1} alt='Education for change' />
      </div> */}

      </div>

      {/* <section className="apply-section">
        <h2>Apply for Mentor</h2>
        <form onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
          <button type="submit" className="btn">Send Application</button>
        </form>
      </section> */}

      <div className="container">
        <div className="intro">
          <div>
            <span>
              Education <br></br>for <br></br>Change <br></br>
            </span>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/fyJArvpZj6k"
              title="Eklavya Story | Democratizing Access to Higher Education &amp; Enabling Leadership from Grassroots"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        <section className="apply-section">
          <h2>Apply for Mentor</h2>
          <form onSubmit={handleEmailSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                value={message}
                onChange={handleMessageChange}
                required
              />
            </div>
            <button type="submit" className="btn">
              Send Application
            </button>
          </form>
        </section>

        <section className="workshop-section">
          <h2>Register for a Workshop</h2>
          <div className="workshops">
            {workshopList.map((workshop) => (
              <div key={workshop.id} className="workshop">
                <span>
                  {workshop.name}
                  <button
                    className="btn"
                    onClick={() => handleWorkshopSelect(workshop.id)}
                  >
                    Register
                  </button>
                </span>
                {selectedWorkshop === workshop.id && (
                  <form onSubmit={(e) => handleWorkshopSubmit(e, workshop)}>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn">
                      Confirm Registration
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="opportunities-section">
          <h2>Internship and Fellowship Opportunities</h2>
          <div className="opportunities">
            {opportunitiesList.map((opportunity) => (
              <div key={opportunity.id} className="opportunity">
                <h3>{opportunity.title}</h3>
                <p>{opportunity.shortDescription}</p>
                <button
                  className="btn"
                  onClick={() => handleOpportunitySelect(opportunity.id)}
                >
                  Learn More
                </button>
                {selectedOpportunity === opportunity.id && (
                  <div className="full-description">
                    <p>{opportunity.fullDescription}</p>
                    <button
                      className="btn"
                      onClick={() => setSelectedOpportunity(null)}
                    >
                      Show Less
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
