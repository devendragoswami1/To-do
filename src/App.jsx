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
      description: 'Some description about todo which is optional', // Optional field
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
  
  return (
    <>
      <Header />
      <button onClick={makePostRequest}>create To Do</button>
    </>
  );
}

export default App;
