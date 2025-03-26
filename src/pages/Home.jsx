import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to AUV Innovations</h1>
        <p>Exploring the depths with cutting-edge autonomous technology</p>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>About Our AUVs</h2>
        <p>
          Our Autonomous Underwater Vehicles (AUVs) are designed to explore the ocean's depths, providing valuable data for research, exploration, and industrial applications. With advanced navigation systems and robust designs, our AUVs operate independently, reaching areas previously inaccessible to humans.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Advanced Navigation</h3>
            <p>Equipped with state-of-the-art navigation systems, our AUVs ensure precise and reliable underwater operations.</p>
          </div>
          <div className="feature-item">
            <h3>Modular Design</h3>
            <p>Our AUVs feature a modular design, allowing for easy customization and integration of various sensors and tools.</p>
          </div>
          <div className="feature-item">
            <h3>Long-Endurance Missions</h3>
            <p>Designed for extended missions, our AUVs can operate for prolonged periods, covering vast underwater territories.</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications">
        <h2>Applications</h2>
        <div className="application-list">
          <div className="application-item">
            <h3>Scientific Research</h3>
            <p>Our AUVs assist scientists in collecting data from the ocean's depths, contributing to marine biology, geology, and environmental studies.</p>
          </div>
          <div className="application-item">
            <h3>Underwater Exploration</h3>
            <p>From mapping the seafloor to discovering new marine species, our AUVs are at the forefront of underwater exploration.</p>
          </div>
          <div className="application-item">
            <h3>Industrial Inspections</h3>
            <p>Our AUVs provide efficient solutions for inspecting underwater infrastructures such as pipelines, cables, and offshore platforms.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src="image1.jpg" alt="AUV in action" />
          <img src="image2.jpg" alt="Underwater exploration" />
          <img src="image3.jpg" alt="AUV deployment" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-cta">
        <h2>Get in Touch</h2>
        <p>Interested in learning more about our AUVs or collaborating with us? Contact us today!</p>
        <a href="/contact" className="contact-button">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
