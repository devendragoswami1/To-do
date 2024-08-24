import { useEffect, useState } from "react";
import Header from "./components/Header";
function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://freeapi-app-production-3059.up.railway.app/api/v1/todos"
    );
    const json = await response.json();
    console.log(json);

    setData(json);
  };

  async function makePostRequest() {
    const url = 'https://freeapi-app-production-3059.up.railway.app/api/v1/todos/';
    const data = {
      title: 'Contribute ReactJs',
      description: 'Some description about todo which is optional', 
    };
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),   
  
    });
  
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
  
    const result = await response.json();   
  
    console.log('Success:', result);
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  async function makePost() {
    const url = 'https://freeapi-app-production-3059.up.railway.app/api/v1/seed/todos';
    const data = {}; // Empty object for the body (optional)
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        // body: JSON.stringify(data), // Include data if required
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);   
  
    }
  }
  
  makePost();
  return (
    <>
      <Header />
      <button onClick={makePostRequest}>create To Do</button>
      <button onClick={makePost}>seed To Do</button>
    </>
  );
}

export default App;
