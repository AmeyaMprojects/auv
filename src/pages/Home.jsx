import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Home = () => {
  const heroRef = useRef(null);
  const animationId = useRef(null); // To store the animation frame ID

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();

    // Set a blue sea/ocean-like background color
    scene.background = new THREE.Color(0x87ceeb); // Light blue color

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Move the camera further away from the model
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8); // Make the canvas smaller
    heroRef.current.appendChild(renderer.domElement);

    // Add brighter lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Increased intensity
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2); // Increased intensity
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Load the GLTF model
    const loader = new GLTFLoader();
    let modelGroup = new THREE.Group(); // Group to center the rotation
    scene.add(modelGroup);

    loader.load(
      "/AUV.glb", // Correct path to your model in the public folder
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.3, 0.3, 0.3); // Make the model smaller

        // Adjust the model's position to center its rotation
        model.position.y = -0.5; // Adjust based on the model's height
        modelGroup.add(model); // Add the model to the group
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Animation loop
    const animate = () => {
      animationId.current = requestAnimationFrame(animate);

      // Rotate the group continuously
      modelGroup.rotation.y += 0.01; // Continuous rotation around Y-axis

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      // Stop the animation loop
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }

      // Remove the renderer's DOM element
      if (heroRef.current) {
        heroRef.current.removeChild(renderer.domElement);
      }

      // Dispose of the scene, geometry, and materials
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      // Dispose of the renderer
      renderer.dispose();
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <h1>Welcome to AUV MITB</h1>
        <p>Exploring the depths with cutting-edge autonomous technology</p>
      </section>

      {/* Other sections remain unchanged */}
      <section className="introduction">
        <h2>About Our AUVs</h2>
        <p>
          Our Autonomous Underwater Vehicles (AUVs) are designed to explore the
          ocean's depths, providing valuable data for research, exploration, and
          industrial applications. With advanced navigation systems and robust
          designs, our AUVs operate independently, reaching areas previously
          inaccessible to humans.
        </p>
      </section>

      {/* Other sections */}
    </div>
  );
};

export default Home;