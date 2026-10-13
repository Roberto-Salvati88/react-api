import { useState, useEffect } from 'react';
import axios from 'axios';
import ActorCard from './components/ActorCard.jsx';

const ACTRESSES_URL = 'https://lanciweb.github.io/demo/api/actresses/';
const ACTORS_URL = 'https://lanciweb.github.io/demo/api/actors/';

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  // MILESTONE 1: la fetch va dentro useEffect con [] → parte solo al montaggio.
  // Fuori da useEffect: setState → re-render → nuova fetch → loop infinito.
  useEffect(() => {
    axios.get(ACTRESSES_URL).then(response => {
      console.log(response.data);
      setActresses(response.data);
    });

    axios.get(ACTORS_URL).then(response => {
      console.log(response.data);
      setActors(response.data);
    });
  }, []);

  // BONUS 2: lista unica con attori e attrici (spread di due array)
  const allPeople = [...actresses, ...actors];

  return (
    <main className="container">
      <h1>Cast</h1>

      <h2>Attrici</h2>
      <div className="grid">
        {actresses.map(person => <ActorCard key={`f-${person.id}`} person={person} />)}
      </div>

      <h2>Attori</h2>
      <div className="grid">
        {actors.map(person => <ActorCard key={`m-${person.id}`} person={person} />)}
      </div>

      <h2>Tutti insieme ({allPeople.length})</h2>
      <div className="grid">
        {allPeople.map((person, index) => <ActorCard key={index} person={person} />)}
      </div>
    </main>
  );
}

export default App;
