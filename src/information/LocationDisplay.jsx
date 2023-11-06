import React, { useState, useEffect } from 'react';
import './locationDisplay.css';
import { Dna } from 'react-loader-spinner';

const LocationDisplay = ({ locationData }) => {
  const placeholderData = {
    country: 'Loading...',
    places: [],
  };

  // Move the useState and useEffect outside of the conditional block
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (locationData) {
      // Simulate a data fetch or API call
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Replace with your actual data fetch code
    }
  }, [locationData]); // Include locationData as a dependency

  if (!locationData) {
    return <p>No location data available yet.</p>;
  }

  return (
    <div>
      {isLoading ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <div>
          <p style={{ fontWeight: 'bold', fontSize: '26px' }}>Country: {locationData.country}</p>
          <h3 style={{ fontWeight: 'bold', fontSize: '30px' }}>Places:</h3>
          <ul>
            {locationData.places.map((place, index) => (
              <li key={index}>
                <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Place Name: {place['place name']}</p>
                <p style={{ fontWeight: 'bold', fontSize: '24px' }}>State: {place['state']}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationDisplay;
