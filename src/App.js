import {useState, useEffect} from "react"
import axios from 'axios'
import './App.css';

import Header from "./components/ui/Header"

const App = () => {

  // UseState
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // UseEffects
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data)
    }
    // call fetchItems
    fetchItems()
  }, [])

  return (
    <div className="container">
        <Header/>
    </div>
  );
}

export default App;
