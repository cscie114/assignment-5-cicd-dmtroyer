import React, { useState, useEffect } from 'react'
import Layout from "../components/layout"
import "../styles/global.css"

const WhichPonyAmIPage = () => {
  const [pony, setPony] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('/.netlify/functions/random-pony');
        const result = await response.json();
        setPony(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <h2>You are a horse. { pony.name }</h2>
    </Layout>
  )
}

export default WhichPonyAmIPage

export const Head = () => <title>Bronies - Which Pony am I?</title>
