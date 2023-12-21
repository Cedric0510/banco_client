import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestParts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get('http://localhost:8000/Users');
        
        setData(response.data);
        console.log (data)
      } catch (error) {
        
        console.error('Erreur lors de la requête:', error);
      }
    };

    
    fetchData();
  }, []); 

  return (
    <div>
      <h1>Données de l'API</h1>
      {/* Afficher les données récupérées */}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestParts;