import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { styles } from './styles';

function App() {
  const globeEl = useRef();
  const now = new Date();
  const time = now.getHours();

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 33.7501, lng: -84.3885, altitude: 1.5 }, 4000);
  }, []);

  let globeUrl = "//unpkg.com/three-globe/example/img/earth-day.jpg";
  if (time >= 18) {
    globeUrl = "//unpkg.com/three-globe/example/img/earth-night.jpg";
  }

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <nav
        style={styles.navBar}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Anthony's Website</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
        {/* Background Globe */}
        <div
          style={styles.globeDiv}
        >
          <Globe
            ref={globeEl}
            globeImageUrl={globeUrl}
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            labelsData={[
              { lat: 33.7501, lng: -84.3885, text: 'Atlanta, GA', color: 'red' },
              { lat: 42.3555, lng: -71.0565, text: 'Boston, MA', color: 'blue' },
              { lat: 40.5089, lng: -74.8587, text: 'Montgomery, NJ', color: 'brown' },
              { lat: 41.3874, lng: 2.1686, text: 'Barcelona, Spain', color: 'yellow' },
              { lat: 35.14066, lng: -84.34971, text: 'Milton, GA', color: 'purple' },
            ]}
            labelLat="lat"
            labelLng="lng"
            labelText="text"
            labelColor={d => d.color}
            labelSize={1.0}
            labelDotRadius={0.6}
          />
        </div>

        {/* Left Overlay Panel */}
        <div
          style={styles.overlay}
        >
          <h1>
            {time < 12
              ? 'Good morning!'
              : time < 18
              ? 'Good afternoon!'
              : 'Good evening!'}
          </h1>
          <img
              src={require('./assets/anthony.jpg')}
              alt="Anthony"
              style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
          />
          <div
            style={styles.logoDiv}
          >
            <img
              src={require('./assets/gt_logo.png')}
              alt="Georgia Tech"
              style={{ width: '80px', height: 'auto', borderRadius: '8px' }}
            />
            <img
              src={require('./assets/harvard_logo.png')}
              alt="Harvard"
              style={{ width: '80px', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <p style={{ fontSize: '1.1rem', margin: '0' }}>
            Hi, I'm Anthony! Each dot on the globe marks a place I've lived. Click on any dot to learn more about my journey.
          </p>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}

export default App;
