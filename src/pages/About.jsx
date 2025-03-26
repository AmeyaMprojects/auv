import React from "react";

const About = () => {
  return (
    <div className="about">
      {/* Mission Statement Section */}
      <section className="mission">
        <h1>Our Mission</h1>
        <p>
          At XYZ AUV Technologies, our mission is to revolutionize underwater exploration by providing state-of-the-art autonomous vehicles that deliver unparalleled performance and reliability.
        </p>
      </section>

      {/* History Section */}
      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in 20XX, XYZ AUV Technologies began as a small startup with a vision to explore the uncharted depths of our oceans. Over the years, we have grown into a leading provider of autonomous underwater vehicles, known for our innovation and commitment to excellence.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Chief Executive Officer</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Research and Development</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li>
            <h3>Innovation</h3>
            <p>We continuously push the boundaries of technology to develop cutting-edge AUV solutions.</p>
          </li>
          <li>
            <h3>Integrity</h3>
            <p>We conduct our business with the highest ethical standards, ensuring transparency and trust with our clients and partners.</p>
          </li>
          <li>
            <h3>Sustainability</h3>
            <p>We are committed to developing environmentally friendly technologies that promote the health of our oceans.</p>
          </li>
          <li>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork, both within our organization and with our clients, to achieve common goals.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
