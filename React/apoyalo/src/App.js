import PersonCard from './components/personCard.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="John"
        lastName="Doe"
        age={30}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Jane"
        lastName="Smith"
        age={25}
        hairColor="Blonde"
      />
      <PersonCard
        firstName="Michael"
        lastName="Johnson"
        age={40}
        hairColor="Black"
      />
      <PersonCard
        firstName="Emily"
        lastName="Williams"
        age={35}
        hairColor="Red"
      />
    </div>
  );
}

export default App;
