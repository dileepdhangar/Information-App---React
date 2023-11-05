import React from 'react';
import { useState } from 'react';
import LocationDisplay from '../information/LocationDisplay';

const PostalCodeInput = () => {

  const [locationData, setLocationData] = useState(null);
  const[ postalCode,setPostalCode] = useState("");
  

  const fetchLocationData = async () => {
    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (response.status === 200) {
        const data = await response.json();
    
        setLocationData(data);
      } else {
        setLocationData(null);
        console.log("data nahi hai") // Reset locationData if the response is not successful
      }
    } catch (error) {
      console.error(error);
      setLocationData(null); // Reset locationData in case of an error
    }
  };




  return (
    <div>
    <h2>Enter the Postal Code</h2>
    
      <input
        type="number"
        placeholder="Enter postal code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button onClick={fetchLocationData}>Fetch Location Data</button>
  
    <LocationDisplay locationData={locationData} />
  </div>
  );
};

export default PostalCodeInput ;
 