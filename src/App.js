import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-component';
import "./App.css";

function App() {

  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(function() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(function(res) {
      setData(res.data)
    })
    .catch(function(err) {
      console.log(err)
    })
  }, [])

  const NasaImage = (props) => {
    <div>
      <img src={props.data.hdurl}></img>
    </div>
  }

  const StyledDiv = style.div `
    color: blue;
  `


  
  
  return (
    <StyledDiv>
      <h1>Nasa Photo of the Day</h1>
      <NasaImage data={data} />
    </ StyledDiv>
  );
}

export default App;
