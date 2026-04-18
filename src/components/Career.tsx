import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science Engineering</h4>
                <h5>PES University, Bangalore</h5>
              </div>
              <h3>2023 – 2027</h3>
            </div>
            <p>CGPA: 7.1</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 12th</h4>
                <h5>2022</h5>
              </div>
              <h3>72%</h3>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 10th</h4>
                <h5>2021</h5>
              </div>
              <h3>90%</h3>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Robotics Intern</h4>
                <h5>IISc Bangalore</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              Gained hands-on exposure to robotics systems, sensors, and automation workflows. Assisted in development and testing of robotic components used in experimental setups. Collaborated with researchers to understand real-world robotics and control systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
