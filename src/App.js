import './App.css';

const Hello = ({name, age}) => {
  const bornYear = () =>  new Date().getFullYear() - age
  return (
    <div>
      <p>Hello { name } you are {age} years old</p>
      
      <h4>You are probably born in { bornYear() }</h4>
    </div>
  )
}

function App() {
  const name ="Ahammad"
  const age = 24
  return (
    <div className="App">
      <header className="App-header">
        <h1>Greetings</h1>
        <Hello name="Raju" age={10+24}/>
        <Hello name={name} age={age}/>
      </header>
    </div>
  );
}

export default App;
