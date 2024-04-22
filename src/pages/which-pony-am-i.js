import React, { useState, useEffect } from 'react'
import Layout from "../components/layout"
import "../styles/global.css"

const WhichPonyAmIPage = () => {
  const [pony, setPony] = useState(null);
  const [ponyImage, setPonyImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/.netlify/functions/random-pony');
        const result = await response.json();

        setPony(result.name);
        if (result.image && result.image.length > 0) {
          setPonyImage(result.image[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className='pony'>
        {pony ? <h2>You are {pony}.</h2> : <h2>Let me guess...</h2>}
        {ponyImage && <img src={ponyImage} alt={pony} />}
      </div>
    </Layout>
  )
}

export default WhichPonyAmIPage

export const Head = () => <title>Bronies - Which Pony am I?</title>
