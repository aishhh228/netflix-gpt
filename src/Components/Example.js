import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchData = async () =>{
    try{
        const getData = await fetch ();
        if(!getData.ok){
            throw new Error ("Network error ");
        }
        const data = await getData.json();
        setData(data);
        
    }catch(error){
        setError(error.message);

    }finally{
        setloading(false)
    }
  }
 useEffect(()=>{
    getData();

 }, []);

 useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
