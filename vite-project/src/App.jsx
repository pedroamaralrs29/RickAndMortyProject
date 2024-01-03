import './App.css';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import Grid from '@mui/material/Grid';
import CharacterCard from './components/CharacterCard';
import axios from 'axios';
import './index.css';  
import { useEffect, useState } from 'react';


function App() {

  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() =>{
    getCharacter()
  }, [])

  const getCharacter = () => {
    axios
      .get("https://rickandmortyapi.com/api/character") 
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const handleFilterChange = (filter) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };
  

  
  return (
    <>
    <NavBar handleFilterChange={handleFilterChange} />
      <Container maxWidth="xl">
      <Grid container spacing={2}>
          {(filteredCharacters.length > 0 ? filteredCharacters : characters).map((character, key) => (
            <Grid item xs={4} key={key}>
              <CharacterCard name={character.name} status={character.status} imageUrl={character.image} />
            </Grid>
          ))}
      </Grid>
      </Container>
    </>
  )
}

export default App
