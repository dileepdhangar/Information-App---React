import React from 'react';

const LocationDisplay = ({ locationData }) => {
  return (
    <div>
      <h2>Location Information</h2>
      {locationData ? (
        <div>
          <p>Country: {locationData.country}</p>
       
          <h3>Places:</h3>
          <ul>
            {locationData.places.map((place, index) => (
              <li key={index}>
                <p>Place Name: {place['place name']}</p>
                <p>state : {place['state']}</p>
      
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No location data available yet.</p>
      )}
    </div>
  );
};

export default LocationDisplay;