import {useState, useEffect} from "react"
import axios from 'axios'
import './App.css';

import Header from "./components/ui/Header"
import CharacterGrid from "./components/characters/CharacterGrid"
import Search from "./components/ui/Search";

const App = () => {

  // UseState
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  // UseEffects
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      // Set the piece of data with setItems
      setItems(result.data)
      setIsLoading(false)
    }
    // call fetchItems
    fetchItems()
  }, [query])

  return (
    <div className="container">
        <Header/>
        <Search getQuery={(q) => setQuery(q)}/>
        <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
