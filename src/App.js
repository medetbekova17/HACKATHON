import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Parent from './components/Parent';

function App() {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  
  const fetchData = async () => {
    try {  
      setIsLoading(true)

      const { data } = await axios.get('https://rickandmortyapi.com/api/character/')
      // setState(data.results)
      
    } catch (error) {
      
      setError(true)
      
    } finally {
      setIsLoading(false)
    }
    
  }
  
  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <div className="App">
      <h1>Data from child</h1>
      <Parent/>

      {/* <button onClick={fetchData}>Get data</button>

      {error && <h2 style={{color: 'red'}}>Что-то пошло не так!!!</h2>}
      
      {isLoading && <h2>Loading...</h2>}
      
      {state && state.map(el => (
          <p key={el.id}>{el.name}</p>
      ))} */}
      
    
      
    </div>
  );
}

export default App;
//  1 создать  для состоянии из дочернего компонента
// 2 создать функцию которая принимает состояние дочернего компонента и сетает в наше состояние