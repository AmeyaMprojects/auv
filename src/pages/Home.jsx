import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Home = () => {
  const heroRef = useRef(null);
  const animationId = useRef(null); // To store the animation frame ID
  const [isLoading, setIsLoading] = useState(() => {
    // Check if the loading screen has already been shown
    return !localStorage.getItem("hasLoaded");
  });

  useEffect(() => {
    if (isLoading) {
      // Set a timeout to hide the loading screen after 5 seconds
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasLoaded", "true"); // Mark the loading screen as shown
      }, 5000);

      return () => clearTimeout(loadingTimeout); // Cleanup timeout on unmount
    }

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Light blue color

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
    heroRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const loader = new GLTFLoader();
    let modelGroup = new THREE.Group();
    scene.add(modelGroup);

    loader.load(
      "/AUV.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.3, 0.3, 0.3);
        model.position.y = -0.5;
        modelGroup.add(model);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    const animate = () => {
      animationId.current = requestAnimationFrame(animate);
      modelGroup.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      if (heroRef.current) {
        heroRef.current.removeChild(renderer.domElement);
      }
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
      renderer.dispose();
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <h1>Welcome to AUV Innovations</h1>
        <p>Exploring the depths with cutting-edge autonomous technology</p>
      </section>
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
    </div>
  );
};

export default Home;