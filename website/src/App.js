import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

function App() {
  const globeEl = useRef();

  const now = new Date();
  const time = now.getHours();

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 4000);
  }, []);

  let globeUrl = "//unpkg.com/three-globe/example/img/earth-day.jpg";
  if (time >= 18) {
    globeUrl = "//unpkg.com/three-globe/example/img/earth-night.jpg";
  }

  return (
    <div style={{ backgroundColor: '#000', height: '100vh', display: 'flex' }}>
      {/* Left scrollable white box */}
      <div
        style={{
          width: '35vw',
          minWidth: '300px',
          maxWidth: '600px',
          background: 'white',
          overflowY: 'auto',
          boxSizing: 'border-box',
          borderRight: '1px solid #eee',
          position: 'relative'
        }}
      >
        <div
          style={{
            top: 0,
            left: 0,
            background: 'white',
            color: 'black',
            padding: '8px 16px',
            fontWeight: 'bold',
            overflowX: 'hidden',
            fontSize: '32px',
            zIndex: 1000,
            position: 'sticky',
            textAlign: 'center',
            borderBottomRightRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Anthony's Website
        </div>
        <div style={{ marginTop: '8px', padding: '24px' }}>
          <img
            src={require('./assets/anthony.jpg')}
            alt="Anthony"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '8px' }}
          />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', margin: '24px 0' }}>
          <img
            src={require('./assets/gt_logo.png')}
            alt="Georgia Tech"
            style={{ width: '160px', height: 'auto', borderRadius: '8px', marginBottom: '8px' }}
          />
          <img
            src={require('./assets/harvard_logo.png')}
            alt="Harvard"
            style={{ width: '70px', height: 'auto', borderRadius: '8px', marginBottom: '8px' }}
          />
        </div>
      </div>
      {/* Right globe box */}
      <div
        style={{
          flex: 1,
          background: '#222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Globe
          ref={globeEl}
          globeImageUrl={globeUrl}
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          pointsData={[
            { lat: 33.7501, lng: -84.3885, size: 1, color: 'red' },   // Atlanta
            { lat: 42.3555, lng: -71.0565, size: 1, color: 'blue' },   // Boston
            { lat: 40.5089, lng: -74.8587, size: 1, color: 'green' }, // New Jersey
            { lat: 41.3874, lng: 2.1686, size: 1, color: 'yellow' }, // Barcelona
            { lat: 34.14066, lng: -84.34971, size: 1, color: 'purple' }, // Milton, GA
          ]}
          pointAltitude="size"
          pointColor="color"
        />
      </div>
    </div>
  );
}

export default App;