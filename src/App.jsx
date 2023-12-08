import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  const [cards, setCards] = useState([]);

  const handleAddCard = () => {

    setCards([...cards, <Card key={cards.length} />])

  };

  return (
    <>
      <button className="addButton" onClick={handleAddCard}>+</button>

      <div className='card-container'>
        {cards.map((card, index) => (

          <div key={index}>{card}</div>
        ))}
      </div>
    </>
  )
}

export default App
