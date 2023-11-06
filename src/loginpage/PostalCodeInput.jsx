import React from 'react';
import { useState } from 'react';
import LocationDisplay from '../information/LocationDisplay';
import './postalCode.css';

const PostalCodeInput = () => {

  const [locationData, setLocationData] = useState(null);
  const [postalCode, setPostalCode] = useState("");
  const [refresh, setRefresh] = useState(true);

  function toggle() {
    setRefresh((refresh) => !refresh)
  }

 


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
    <div className="form-group p-5">
      <label for="exampleInputEmail1" className='m-3' style={{ fontWeight: 'bold', fontSize: '60px' }}>  Information App - React </label>
      <div class="container">
        <div class="input-group">
          <label class="input-group__label" for="myInput"></label>
          <input type="text" id="myInput" placeholder='Enter the Postal Code' class="input-group__input" value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)} />
        </div>
      </div>
      <small id="emailHelp" className="form-text text-muted" style={{ fontWeight: 'bold', fontSize: '24px' }}>Tap to discover your location's Info </small>
      <button onClick={fetchLocationData} type="button" class="btn btn-primary m-3">Fetch Location Data</button>
      <button type="button" onClick={toggle} class="btn btn-primary m-3" >Clear the Information </button>
      <h2>Location Information</h2>
      {refresh && <LocationDisplay locationData={locationData} />}

    </div>
  );
};

export default PostalCodeInput;
